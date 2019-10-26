function wasBranchCreated(payload) {
  return 'ref' in payload &&
    payload.ref_type === 'branch';
}

module.exports = wasBranchCreated;
