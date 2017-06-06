'use strict';

const caniuse = require('caniuse-api');
const Hapi = require('hapi');

const server = new Hapi.Server();
const browsers = caniuse.getLatestStableBrowsers();

server.connection({ port: 8080 });

const getLast = (browser) => {
  const versions = browsers.filter((e,i) => {
    return e.search(browser) > -1;
  });
  return versions[versions.length - 1];
}

server.route({
  method: 'GET',
  path: '/',
  handler: (request, reply) => {
    const latest = [
      getLast('ie '),
      getLast('edge'),
      getLast('firefox'),
      getLast('chrome'),
      getLast('safari'),
      getLast('opera')
    ]
    reply(latest);
  }
});

server.start(() => {});