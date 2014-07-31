/**
 * Created by twatson on 7/31/14.
 */


require("sonya-from-directory");


var Provide = require("sonya").Provide
    , Injector = require("sonya").Injector
    ;

Provide.fromDirectory("./app");

Injector.invoke(function(server){

});