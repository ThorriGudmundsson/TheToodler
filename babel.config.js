/* eslint no-use-before-define: 0 */  // --> OFF
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
