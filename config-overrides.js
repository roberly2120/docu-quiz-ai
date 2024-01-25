const { override, addWebpackModuleRule } = require('customize-cra');


module.exports = override(
    addWebpackModuleRule({
        test: /node_modules[/\\](mammoth|lop)[/\\]/,
        use: {
            loader: 'null-loader',
        },
    })
);