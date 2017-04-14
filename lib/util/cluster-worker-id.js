'use strict';

var cluster = require('cluster');

/**
* NODE_UNIQUE_ID is not supported to identify an worker in cluster mode.
* @see https://github.com/ericjohn/node/blob/master/src/node.js#L83
**/
// module.exports = parseInt(process.env.NODE_UNIQUE_ID || 0, 10);
module.exports = parseInt(cluster.isMaster ? 0 : cluster.worker.id, 10);
