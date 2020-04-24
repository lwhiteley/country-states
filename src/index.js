let db = {};

function compile(countryCodes) {
  countryCodes.forEach((code) => {
    try {
      const data = require(`../data/${code.toUpperCase()}.json`);
      db = { ...db, [data.iso]: data };
    } catch (e) {}
  });
}

const states = (code) => {
  const c = typeof code === 'string' ? code.toUpperCase() : '';
  const data = db[c];
  if (!data) {
    return [];
  }
  return data.states;
};

module.exports = { compile, states };
