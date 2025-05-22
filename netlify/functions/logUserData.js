import firebase from 'firebase-admin';
import UAParser from 'ua-parser-js';

firebase.initializeApp({
  credential: firebase.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  }),
  databaseURL: process.env.FIREBASE_DATABASE_URL,
});

const db = firebase.firestore();

const allowedSources = ['linkedin', 'github', 'discord', 'x', 'facebook', 'reddit'];

export const handler = async (event, context) => {
  const userAgent = event.headers['user-agent'];

  const ipAddress = event.headers['x-forwarded-for']
    ? event.headers['x-forwarded-for'].split(',')[0]
    : event.clientContext?.clientIp || 'Unknown IP';

  let rawSource = (event.queryStringParameters && event.queryStringParameters.source) || '';
  rawSource = rawSource.toLowerCase();

  const source = allowedSources.includes(rawSource)
    ? (rawSource === 'x' ? 'Twitter' : rawSource.charAt(0).toUpperCase() + rawSource.slice(1))
    : 'No Referrer';

  const parser = new UAParser(userAgent);
  const deviceType = parser.getDevice().type || 'desktop';
  const osName = parser.getOS().name || 'Unknown OS';
  const browserName = parser.getBrowser().name || 'Unknown Browser';

  const device = deviceType ? deviceType.charAt(0).toUpperCase() + deviceType.slice(1) : 'Desktop';
  const os = osName;
  const browser = browserName;

  let country = 'Unknown Country';
  try {
    const geoResponse = await fetch(`https://get.geojs.io/v1/ip/country/${ipAddress}.json`);
    if (geoResponse.ok) {
      const geoData = await geoResponse.json();
      country = geoData.country || 'Unknown Country';
    }
  } catch {
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
    return {};
  } catch {
    return {};
  }
};
