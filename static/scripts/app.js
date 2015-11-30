requirejs.config({
    //By default load any module IDs from scripts/lib
    baseUrl: 'scripts/lib',
    paths: {
        models: '../models',
        collections: '../collections',
        views: '../views',
        routers: '../routers',
        components: '../components'
    }, 
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        }
    }
});

var app = app || {};
// Just for test begin
app.countries = ['Austris', 'Belgium', 'Finland', 'Germany', 'Ireland', 'Cyprus', 'Denmark', 'France', 'Greece'];

// Just for test end.

require(['routers/router', 'components/dataService'], function (router, dataService) { 
    $(document).ready(function (){
        dataService.getInitData();
        router.start();
    });
});
