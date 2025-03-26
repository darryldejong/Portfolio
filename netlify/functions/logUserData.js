const firebase = require('firebase-admin');

firebase.initializeApp({
  credential: firebase.credential.cert({
    projectId: 'YOUR_PROJECT_ID',
    privateKey: 'YOUR_PRIVATE_KEY'.replace(/\\n/g, '\n'),
    clientEmail: 'YOUR_CLIENT_EMAIL'
  }),
  databaseURL: 'https://portfolio-d6382-default-rtdb.firebaseio.com/'
});

const db = firebase.firestore();

exports.handler = async (event, context) => {
  const userAgent = event.headers['user-agent'];
  const ipAddress = event.headers['x-forwarded-for'] || event.clientContext.clientIp;

const userInfo = {
  userAgent,
  ipAddress,
  timestamp: firebase.firestore.FieldValue.serverTimestamp()
};

try {
  await db.collection('userLogs').add(userInfo);
  return {
    statusCode: 200,
    body: ''
  };
} catch (error) {
  return {
    statusCode: 500,
    body: ''
  };
}
};

