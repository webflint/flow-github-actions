const ID_MATCHER = /\/?(\d+)\/?/;

function getStoryId(branchName) {
  const result = branchName.match(ID_MATCHER);

  if (!result) return;

  return result[1];
}

module.exports = getStoryId;
