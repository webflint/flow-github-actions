const getStoryId = require('../../src/tracker/getStoryId');

test('returns the story id when it is the first part of a branch name', () => {
  const storyId = '123456';
  const branchName = `${storyId}/feature/my-story-branch`;
  const subject = getStoryId(branchName);

  expect(subject).toBe(storyId);
});

test('returns the story id when present in the middle of a branch name', () => {
  const storyId = '123456';
  const branchName = `feature/${storyId}/my-story-branch`;
  const subject = getStoryId(branchName);

  expect(subject).toBe(storyId);
});

test('returns the story id when it is the last part of a branch name', () => {
  const storyId = '123456';
  const branchName = `feature/my-story-branch/${storyId}`;
  const subject = getStoryId(branchName);

  expect(subject).toBe(storyId);
});

test('is not defined when a storyId can not be parsed', () => {
  const branchName = 'feature/my-story-branch';
  const subject = getStoryId(branchName);

  expect(subject).toBe(undefined);
});
