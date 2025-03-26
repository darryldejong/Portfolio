const firebase = require('firebase-admin');

firebase.initializeApp({
  credential: firebase.credential.cert({
    projectId: 'portfolio-d6382',
    privateKey: '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCsEfsBOABxQHJu\nup5rynAoI2rb8bzyj/AP00u4j2U2GUQpvohBuLDyGMjhVObP0cgtM2PXpQkemYrK\njBZ96yGzQDoLXO11TEeAxD2Y3M1am3MJaj+p9PZwwQpxVJJs/MMuNN1V8JqbklM2\nX7acBixuakqAjVCL0Qa0JeL4HyxAhPMM3quFhcI+Ax2AKv7cw4ENqPWX5kaGijm/\nC5caGYckyFKSusQneDT5hGfL8Q0hGsS+AX+EhFDstwm3o8YlPmGZcq5MkA3o1yQS\nJnLyVfbeq5xRFSQTY6oBQlbMzEBDyMfGEcWexNZzkdwYgsc8KExwAAXc7DwaXDs2\nepuvW61RAgMBAAECggEACgcC4iIh1c0O03NuT6jHRXI0RCdVFADzA/ETzL2/2lm5\nllct+JUrQUh+zbGAFo9KmOZm70ZaVDKtcGVJMEMCE+tDwVgZLHNACCR81HTVm231\n/mVMhXqAMWJGhK6MLpbCRxCPRMwAg91l766/Ol4aZmrXoaCFQkicQ+ZLUPCmyFxT\nrfpJe1Um2smjnBX/PrnxizXgb9CX5xee3ix1CZ7b+ULmCfWAv4ViHAvHNocqOjgV\naULva9VqlYrH5PlYD2PGdMsQGZPi6cDeoDrb8wjc8PGY3ORhHHLYh8huXMa53J1j\nOnPDqbQX6OLJDwIPzaPB2bQDBpuprYJgzbLyvNySOQKBgQDyTp/lOe0jOE5ODKgz\nh5vVsJeBcN/pYN6dpX6a4mUaljzfXf7IpwFWCue9tZ/n6xLVni24Bm1xzpbAzVPn\nXCLWFklsgFHYA1hngVrvoVzk8rUHWMjEPwjc12kK3uMlClngt89GLZMeEApXirHv\nmrfDVgUmJnTo6EmBPB8hPbca5QKBgQC1y0MziRlF+f+tzyrwpHNLha7Gc+3Q8NZ0\nu7hRPYg7y5tTxz+mTf4siRz83xeYB9Zg9qAFBP+vP+hDTRlFknSVLrZ8ZS9O3ff9\nymW5/3Fvjb/gM3VuITJZmxDMlIULDBTnC0nf5qXPKHwjNM14TMxvTwKcmJ/+RI8A\niIuZYUcl/QKBgQChZmnvgIRK/4h5SMkJefz9fCGPISalB9eBXulUNhVufkCR8MRz\n13p2W9E9dqvLCbSEAlcly3I/aoLUbnDDHYY+4J2L3nWl06ShXXK7R9reziRzflpN\nDkfTAtF/YjQfSiPQId+5OUZTsg+RfFtF5OMfBD9tyBP7yC6eHPQHalp7WQKBgBfR\n0TVQcmJL1mdkrKCpO34avwK7r95foAnditICOPZ0wB5jDgDxWStmr8imRoYiCMHd\nrqvZstK4kes3j+cgwGvHmhuEeoVf6h1zxo5vXOKb9RcgRvOuH9XDzpivoRsIcziu\nrvhKVVFmYZWPVpi7n1G6TYJNMTF0tDQCsB/hshvVAoGBANGEJl7ZLo0TWAz8uMhG\nLpTDL7Xl6UQuxabGNlnMzgZgNh1MvSKmzAuVfH45JidetvY5DLKGB/FxrCFp4w3B\nsL4P4FHZdmj1FEIMMyM6aHbtfSjfLuE7Wryy+RE5kd7IKXBII62S4AGS/nNCE4ny\nPTGAaX/SvwgHEwLrRvAc+nO1\n-----END PRIVATE KEY-----\n'.replace(/\\n/g, '\n'),
    clientEmail: 'firebase-adminsdk-fbsvc@portfolio-d6382.iam.gserviceaccount.com'
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

