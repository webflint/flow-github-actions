const wasBranchCreated = require('./wasBranchCreated');
const hasPullRequest = require('./hasPullRequest');

function getBranchName(payload) {
  if (wasBranchCreated(payload)) {
    return payload.ref;
  } else if (hasPullRequest(payload)) {
    return payload.pull_request.head.ref;
  }
}

module.exports = getBranchName;
