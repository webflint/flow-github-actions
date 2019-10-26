const wasPush = require('./wasPush');
const hasPullRequest = require('./hasPullRequest');

function getBranchName(payload) {
  if (wasPush(payload)) {
    const headRef = /^refs\/heads\//;
    return payload.ref.replace(headRef, '');
  } else if (hasPullRequest(payload)) {
    return payload.pull_request.head.ref;
  }
}

module.exports = getBranchName;
