({
    // include: "requirejs",
    baseUrl: ".",
    urlArgs: null,
    // dir: "../build",
    name: "../bower_components/almond/almond",
    include: 'app/main',
    out: '../main.js',
    wrap: true,
    mainConfigFile: "config.js",
    // shim: {
    //     "app/main": ["requirejs"],
    //     // "app/templates": ["compiled_templates/all"],
    //     // handlebars: {
    //     //     exports: 'handlebars.runtime'
    //     // },
    // },
    // modules: [
    //     {
    //         name: "app/main"
    //     }
    // ],
    // // paths: {
    // //     handlebars: "bower_components/handlebars/handlebars.runtime.amd.min",
    // // },
    insertRequire: ['app/main']
    // // skipDirOptimize: true
})