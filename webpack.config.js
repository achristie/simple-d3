var path = require('path');

module.exports = {
    context: path.join(__dirname + '/app'),
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/app',
    },
    module: {
        loaders: [
            {test: '/\.js$/', loader:'babel', exclude: /(node_modules)/},
            {test: '/\.html$/', loader: 'raw', exclude: /(node_modules)/},
            {test: '/\.css$/', loader: 'style!css'}
        ]
    }
};
