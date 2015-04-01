require.config({
    baseUrl: './js',

    deps: ['main'],

    paths: {
        jquery: '../vendor/jquery/dist/jquery',
        underscore: '../vendor/underscore/underscore',
        text: '../vendor/requirejs-text/text',
        css: '../vendor/require-css/css',
    },

    waitSeconds: 60,

    shim: {
        underscore: {
            exports: '_'
        },
    }
});
