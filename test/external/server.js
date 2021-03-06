var SocketCluster = require('socketcluster').SocketCluster;

var socketCluster = new SocketCluster({
  balancers: 1,
  workers: 1,
  stores: 1,
  port: 8000,
  appName: 'myapp',
  workerController: __dirname + '/worker.js',
  balancerController: __dirname + '/balancer.js',
  storeController: __dirname + '/store.js',
  addressSocketLimit: 0,
  socketEventLimit: 100,
  rebootWorkerOnCrash: true,
  useSmartBalancing: false
});

socketCluster.on('ready', function () {
  process.send({event: 'ready'});
});