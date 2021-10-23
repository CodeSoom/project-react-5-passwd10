/* eslint-disable @typescript-eslint/no-var-requires */

const { https } = require('firebase-functions');

const admin = require('firebase-admin');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const nextjsServer = next({
  dev,
  conf: { distDir: '.next' },
});
const nextjsHandle = nextjsServer.getRequestHandler();

admin.initializeApp();

exports.nextServer = https.onRequest((req, res) => {
  nextjsServer.prepare().then(() => nextjsHandle(req, res));
});
