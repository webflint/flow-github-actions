const loadFixture = require('../helpers/loadFixture');
const getState = require('../../src/event/getStoryState');

test('returns started when a branch is created', () => {
  const payload = loadFixture('branch_created');
  const subject = getState(payload);

  expect(subject).toBe('started');
});

test('returns finished when a PR is opened', () => {
  const payload = loadFixture('pr_opened');
  const subject = getState(payload);

  expect(subject).toBe('finished');
});

test('returns delivered when a PR is approved', () => {
  const payload = loadFixture('pr_approved');
  const subject = getState(payload);

  expect(subject).toBe('delivered');
});

test('returns accepted when a PR is merged', () => {
  const payload = loadFixture('pr_merged');
  const subject = getState(payload);

  expect(subject).toBe('accepted');
});
