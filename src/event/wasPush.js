function wasPush(payload) {
  return 'ref' in payload;
}

module.exports = wasPush;
