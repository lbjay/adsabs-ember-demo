requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'static/js/libs',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        app: '../app',
        bootstrap: '../../bootstrap/js'
    }
});

// Start the main app logic.
requirejs(['jquery', 'handlebars', 'ember', 'bootstrap/bootstrap', 'app/app'],
function   ($, handlebars, ember, bootstrap, foo) {
    //jQuery, canvas and the app/sub module are all
    //loaded and can be used here now.
});