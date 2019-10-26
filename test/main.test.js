const main = require('../src/main');

jest.mock('../src/tracker/updateState', () => {
  return jest.fn((apiKey, storyId, state) => { return [apiKey, storyId, state] });
});

const apiKey = '1234567890';

test('updates the story when the event constitutes a state change', () => {
  const ENV = {
    TRACKER_API_KEY: apiKey,
    GITHUB_EVENT_PATH: './test/fixtures/pr_merged.json'
  }
  const subject = main(ENV);

  expect(subject).toStrictEqual([apiKey, '168805841', 'accepted']);
});

test('does not update the story if event is not a state change', () => {
  const ENV = {
    TRACKER_API_KEY: apiKey,
    GITHUB_EVENT_PATH: './test/fixtures/pr_review_requested.json'
  }
  const subject = main(ENV);

  expect(subject).toBe(undefined);
});
