/* eslint-disable @typescript-eslint/no-var-requires */

const { https } = require('firebase-functions');

const admin = require('firebase-admin');

admin.initializeApp();

const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const nextjsServer = next({ dev });
const nextjsHandle = nextjsServer.getRequestHandler();

exports.nextServer = https.onRequest((req, res) => {
  nextjsServer.prepare().then(() => nextjsHandle(req, res));
});
