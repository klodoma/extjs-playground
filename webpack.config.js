const path = require('path');
//const ExtWebpackPlugin = require('@sencha/ext-webpack-plugin');
const ExtWebpackPlugin = require('./node_modules_local/@sencha/ext-webpack-plugin/dist/index.js');
const portfinder = require('portfinder');

module.exports = async function (env) {
  
  // Utility function for retrieving environment variables
  function get(it, val) {if(env == undefined) {return val} else if(env[it] == undefined) {return val} else {return env[it]}}

  const rules = [
    { test: /.(js)$/, use: ['babel-loader'] }
  ]
  const resolve = {}
  const host = '0.0.0.0'
  const stats = 'none'

  var app     = get('app',     '')
  console.log(app);

  var framework     = get('framework',     'extjs')
  var contextFolder = get('contextFolder', './' + app)
  var entryFile     = get('entryFile',     './index.js')
  var outputFolder  = get('outputFolder',  './' + app)
  var baseFolder  = get('baseFolder',  './')
  var toolkit       = get('toolkit',       'modern')
  var theme         = get('theme',         'theme-material')
  var packages      = get('packages',      ['treegrid'])
  var script        = get('script',        '')
  var emit          = get('emit',          'yes')
  var profile       = get('profile',       '')
  var environment   = get('environment',   'development')
  var treeshake     = get('treeshake',     'no')
  var browser       = get('browser',       'no')
  var watch         = get('watch',         'yes')
  var verbose       = get('verbose',       'yes')
  var isProd        = false;


  console.log(app, contextFolder, outputFolder);
  if (environment === 'production') { isProd = true; }

  // The build.xml Sencha Cmd plugin uses a regex to locate the webpack bundle for use in app.json to be included in 
  // the different build environments. For development builds, the file is served in memory.
  // For production builds, the hashed file name is stored as an ant property and added to the build via app.json.
  const bundleFormat = isProd ? "[name].[hash].js" : "[name].js";

  // Using Live Reload with a root context directory, necessary for Sencha Cmd, requires these folders be ignored 
  //const ignoreFolders = [path.resolve(__dirname, './generatedFiles'), path.resolve(__dirname, './build'), 'node_modules/**']
  const ignoreFolders = [path.resolve(__dirname, './generatedFiles'), path.resolve(__dirname, './build')]

  portfinder.basePort = (env && env.port) || 1962
  return portfinder.getPortPromise().then(port => {
    const plugins = [
      new ExtWebpackPlugin({
        app: app,
        framework: framework,
        toolkit: toolkit,
        theme: theme,
        packages: packages,
        script: script,
        emit: emit,
        port: port,
        profile: profile, 
        environment: environment,
        treeshake: treeshake,
        browser: browser,
        watch: watch,
        verbose: verbose
      })
    ]
    return {
      mode: environment,
      devtool: (environment === 'development') ? 'inline-source-map' : false,
      context: path.join(__dirname, contextFolder),
      entry: entryFile,
      output: {
        //path: path.join(__dirname, outputFolder),
        //publicPath: path.join(__dirname, outputFolder),
        path: path.join(__dirname, './' + app),
        //publicPath: path.join(__dirname, './' + app),
        publicPath: app,
        //publicPath: path.join(__dirname, './'),
        filename: bundleFormat
      },
      plugins: plugins,
      module: {
        rules: rules
      },
      resolve: resolve,
      performance: { hints: false },
      stats: 'none',
      optimization: { noEmitOnErrors: true },
      node: false,
      watch: true,
      devServer: {
        watchOptions: {
          ignored: ignoreFolders
        },
        //contentBase: [path.resolve(__dirname, outputFolder)],
        //contentBase: [path.resolve(__dirname, './' + app)],
        contentBase: [path.resolve(__dirname, './')],
        //contentBase: __dirname,
        //watchContentBase: !isProd,
        watchContentBase: false,
        liveReload: !isProd,
        historyApiFallback: !isProd,
        host: host,
        port: port,
        disableHostCheck: isProd,
        compress: isProd,
        inline: !isProd,
        stats: stats
      }
    }
  })
}
