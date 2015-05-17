
var itunes_base_url = 'itunes.apple.com'
var countries = require("../data/countries")
var helper = require("./request_helper")

var Itunes = function() {}

Itunes.prototype.get = function(path, params, callback) {
    return helper._setupRequest.apply(this, ["GET", path, params, callback])
};

module.exports = Itunes