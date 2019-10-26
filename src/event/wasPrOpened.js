const hasPullRequest = require('./hasPullRequest');

function wasPrOpened(payload) {
  return payload.action === 'opened' && hasPullRequest(payload);
}

module.exports = wasPrOpened;
