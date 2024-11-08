// module.exports = {
//   root: true,
//   extends: '@react-native',
// };

module.exports = {
  root: true,
  extends: '@react-native',
  root: ['./src'],
  extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
  alias: {
    tests: ['./tests/'],
    '@components': './src/components',
    '@utils': './src/utils',
    '@views': './src/views',
  },
};
