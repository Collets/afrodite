module.exports = {
  staticFileGlobs: [
    'dist/**.html',
    'dist/**.js',
    'dist/**.css',
    'dist/assets/images/*',
    'dist/assets/icons/*'
  ],
  root: 'dist',
  stripPrefix: 'dist/',
  navigateFallback: '/index.html',
  navigateFallbackWhitelist: [/^(?!\/__)/],
  runtimeCaching: [{
    urlPattern: "areatest.scquadro.agency/afrodite/",
    handler: 'networkFirst'
  }]
};