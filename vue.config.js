module.exports = {
  pwa: {
    name: 'Wild Tiger',
    msTileColor: '#202020',
    themeColor: '#A55737',

    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swDest: 'service-worker.js',
      swSrc: './src/sw.js',
      importWorkboxFrom: 'local'
    }
  },

  baseUrl: undefined,
  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined,

  css: {
    sourceMap: true
  }
}