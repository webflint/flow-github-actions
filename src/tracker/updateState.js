const request = require('request');

const TRACKER_API_BASE = 'https://www.pivotaltracker.com/services/v5/';

function main(apiKey, storyId, state) {
  const url = `${TRACKER_API_BASE}stories/${storyId}`;
  request.put(url, {
    headers: {
      'X-TrackerToken': apiKey
    },
    json: {
      current_state: state
    }
  }, (error, res, body) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log(`statusCode: ${res.statusCode}`);
    console.log(body);
  });
}

module.exports = main;
