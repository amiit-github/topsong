var itunes_base_url = 'itunes.apple.com'
var https = require("https");
var qs = require("querystring")
var exports = module.exports = {};

var getcountry = function() {
  return "India"
}
var variables = {
  '{id}': getcountry
};

var _applyVariables = function(path) {
  var pattern, value;
  for (pattern in variables) {
    value = variables[pattern];
    path = path.replace(pattern, value());
  }
  return path;
};

exports._setupRequest = function(method, path, params, callback) {
  var requestData
  if (callback == null) {
    callback = function() {}
  }
  requestData = {
    method: method.toUpperCase(),
    uri: itunes_base_url
  }
  if (path[0] !== '/') {
    path = '/' + path
  }
  requestData.path = _applyVariables(path)
  if (typeof params === "function") {
    callback = params
    params = null
  }
  params = params || {
    format: 'json'
  }
  requestData.params = params
  return _request.apply(this, [requestData, callback])
}


_request = function(data, callback) {
  var options, params, req
  params = qs.stringify(data.params)
  options = {
    hostname: data.uri,
    path: "" + data.path + "?" + params,
    method: data.method
  }
  if (data.method === "POST") {
    options.path = data.path
    options.headers = {
      "Content-Type": "application/x-www-form-urlencoded",
      "Content-Length": params.length
    }
  }
  req = https.request(options, function(response) {
    var body
    body = ""
    response.on("data", function(chunk) {
      return body += chunk
    })
    return response.on("end", function() {
      var err
      try {
        data = JSON.parse(body)
        if (response.statusCode !== 200) {
          return callback(data.errors, data)
        } else {
          return callback(null, data)
        }
      } catch (_error) {
        err = _error
        return callback(err)
      }
    })
  })
  req.on("error", function(err) {
    return callback(err)
  })
  if (data.method === "POST") {
    req.write(params)
  }
  return req.end()
}

