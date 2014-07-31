/**
 * Created by twatson on 7/31/14.
 */

var express = require("express")
    , bodyParser = require("body-parser")
    , methodOverride = require("method-override")
    , serveStatic = require("serve-static")
    , jadeware = require("compile-mw-jade-runtime")
    , session = require("express-session")
    , RedisStore = require("connect-redis")(session)
    , redis = require("redis").createClient
    , http = require("http")
    ;


function server(log){
    var app = express();
    app.set('port', process.env.PORT || 3000);
    app.set('views', './views');
    app.set('view engine', 'jade');
    app.use(bodyParser());
    app.use(methodOverride());
    app.use(require('less-middleware')('../public'));
    app.use(serveStatic('../public', { maxAge: 20 }));
    http.createServer(app).listen(app.get('port'), function(){
        log("Listening on "+app.get('port'));
    });
    return app;
}



module.exports = server;