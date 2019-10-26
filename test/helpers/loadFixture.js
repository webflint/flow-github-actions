const loadEvent = require('../../src/loadEvent');

const FIXTURE_PATH = './test/fixtures';

function loadFixture(name) {
  return loadEvent(`${FIXTURE_PATH}/${name}.json`);
}

module.exports = loadFixture;
