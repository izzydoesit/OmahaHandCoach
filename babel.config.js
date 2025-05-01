module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo',
      ['@babel/preset-env', {
        "useBuiltIns": "entry",
        "corejs": { 'version': "3.22", 'proposals': true },
        "loose": true,
      }]
    ],
    plugins: [
      // ['@babel/plugin-proposal-class-properties', {
      //   "loose": true
      // }],
      // // './node_modules/react-native/packages/babel-plugin-codegen',
      // ['@babel/plugin-proposal-private-property-in-object', {
      //   "loose": true
      // }],
      // ['@babel/plugin-proposal-private-methods', {
      //   "loose": true
      // }]
    ]
  };
};
