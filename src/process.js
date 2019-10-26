const updateStatus = require('./tracker/updateState');
const loadEvent = require('./loadEvent');
const getStoryState = require('./event/getStoryState');
const getBranchName = require('./event/getBranchName');
const getStoryId = require('./tracker/getStoryId');

function process() {
  const event = loadEvent(process.env.GITHUB_EVENT_PATH);
  const apiKey = process.env.TRACKER_API_KEY;
  const state = getStoryState(event);

  if (state) {
    const branchName = getBranchName(event);
    const storyId = getStoryId(branchName);
    return updateStatus(apiKey, storyId, state);
  }
}

module.exports = process;
