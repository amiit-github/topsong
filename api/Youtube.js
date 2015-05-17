var YT_lib = require('youtube-node');

var youTube = new YT_lib();
youTube.setKey('AIzaSyDgkTfT3LzUWg-ROEHCn_DgaNCfAy9FPnc');


// youTube.search('World War z Trailer', 2, function(error, result) {
//   if (error) {
//     console.log(error);
//   }
//   else {
//     console.log(JSON.stringify(result, null, 2));
//   }
// });



var Youtube = function() {}
module.exports = Youtube