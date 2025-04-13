import firebase from 'firebase-admin';

firebase.initializeApp({
  credential: firebase.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  }),
  databaseURL: process.env.FIREBASE_DATABASE_URL,
});

const db = firebase.firestore();

export const handler = async (event, context) => {
  const userAgent = event.headers['user-agent'];
  const ipAddress = event.headers['x-forwarded-for'] ? event.headers['x-forwarded-for'].split(',')[0] : event.clientContext.clientIp;
  const referrer = event.headers['referer'] || 'No Referrer';

  let source = 'No Referrer';
  if (referrer.includes('linkedin.com')) {
    source = 'LinkedIn';
  } else if (referrer.includes('github.com')) {
    source = 'GitHub';
  } else if (referrer.includes('discord.com')) {
    source = 'Discord';
  } else if (referrer.includes('twitter.com')) {
    source = 'Twitter';
  } else if (referrer.includes('google.com')) {
    source = 'Google';
  }

  let device = 'Desktop';
  if (/mobile/i.test(userAgent)) {
    device = 'Mobile';
  } else if (/tablet/i.test(userAgent)) {
    device = 'Tablet';
  }

  let os = 'Unknown OS';
  if (/windows nt/i.test(userAgent)) {
    os = 'Windows';
  } else if (/mac os x/i.test(userAgent)) {
    os = 'macOS';
  } else if (/android/i.test(userAgent)) {
    os = 'Android';
  } else if (/iphone|ipad|ipod/i.test(userAgent)) {
    os = 'iOS';
  }

  let browser = 'Unknown Browser';
  if (/chrome/i.test(userAgent)) {
    browser = 'Chrome';
  } else if (/firefox/i.test(userAgent)) {
    browser = 'Firefox';
  } else if (/safari/i.test(userAgent)) {
    browser = 'Safari';
  } else if (/edge/i.test(userAgent)) {
    browser = 'Edge';
  }

  let country = 'Unknown Country';
  try {
    const geoResponse = await fetch(`https://get.geojs.io/v1/ip/country/${ipAddress}.json`);
    if (geoResponse.ok) {
      const geoData = await geoResponse.json();
      country = geoData.country || 'Unknown Country';
    }
  } catch (error) {
    console.error('Error fetching country data:', error);
  }

  const userInfo = {
    userAgent,
    ipAddress,
    referrer: source,
    device,
    os,
    browser,
    country,
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  };

  try {
    await db.collection('userLogs').add(userInfo);
    return {
      statusCode: 200,
      body: '',
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: 'Error writing to Firestore',
    };
  }
};
