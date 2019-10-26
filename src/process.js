const updateStatus = require('./tracker/updateState');
const loadEvent = require('./loadEvent');
const getStoryState = require('./event/getStoryState');
const getBranchName = require('./event/getBranchName');
const getStoryId = require('./tracker/getStoryId');

function process(inputs) {
  const event = loadEvent(inputs.event_path);
  const apiKey = inputs.api_key;
  const state = getStoryState(event);

  if (state) {
    const branchName = getBranchName(event);
    const storyId = getStoryId(branchName);
    return updateStatus(apiKey, storyId, state);
  }
}

module.exports = process;
