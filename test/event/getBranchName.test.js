const loadFixture = require('../helpers/loadFixture');
const getBranchName = require('../../src/event/getBranchName');

test('determines the branch name from an event', () => {
  const payload = loadFixture('pr_changes_requested');
  const subject = getBranchName(payload);

  expect(subject).toBe('feature/168805841/be-enabled-make-this-change');
});
