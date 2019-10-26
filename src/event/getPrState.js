const hasPullRequest = require('./hasPullRequest');

function getPrState(payload) {
  if (!hasPullRequest(payload)) return;

  return payload.pull_request.state
}

module.exports = getPrState;
