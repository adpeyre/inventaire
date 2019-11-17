const Encore = require('@symfony/webpack-encore');
const nodeExternals = require('webpack-node-externals');

Encore
    .addExternals([nodeExternals()])
    .setOutputPath('build/')
    .setPublicPath('/build')
    .cleanupOutputBeforeBuild()
    .disableSingleRuntimeChunk()
    .enableVersioning(false)
    .enableSourceMaps(false)
    .configureBabel(config => {
        config.presets = [];
    })
    .enableTypeScriptLoader()
    .copyFiles({
        from: 'views',
        to: 'views/[path][name].[ext]'
    })
    .addEntry('app', './src/index.ts');

const config = Encore.getWebpackConfig();
config.target = 'node';
config.node = {
    __dirname: false
};


config.watchOptions = { poll: true, ignored: /node_modules/ };
module.exports = config;
