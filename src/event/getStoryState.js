const started = require('../states/started');
const finished = require('../states/finished');
const delivered = require('../states/delivered');
const accepted = require('../states/accepted');

const stateTests = {
  started,
  finished,
  delivered,
  accepted
};

function getState(payload) {
  return Object.keys(stateTests).find(function(state) {
    return stateTests[state](payload)
  });
}

module.exports = getState;
