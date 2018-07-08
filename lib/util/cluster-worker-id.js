'use strict';

var cluster = require('cluster');

var clusterId = cluster.isMaster ? 0 : cluster.worker.id;
module.exports = parseInt(process.env.NODE_UNIQUE_ID || clusterId, 10);
