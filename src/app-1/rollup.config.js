export default {
  input: 'src/app-1/app-1.js',
  output: {
    dir: 'dist',
    format: 'amd'
  },
  external: ["app-2"]
};
