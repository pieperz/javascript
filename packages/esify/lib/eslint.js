// This looks gross, but we don't want to fail if they don't have ESLint installed
// locally.

try {
  // eslint-disable-next-line node/no-unpublished-require
  var CLIEngine = require(`${process.cwd()}/node_modules/eslint`).CLIEngine;
  var engine = new CLIEngine({fix: true});

  module.exports = function runESLint(details) {
    return engine.executeOnText(details.source).results[0].output;
  };
} catch (err) {
  module.exports = function runESLint(details) {
    return details.source;
  };
}
