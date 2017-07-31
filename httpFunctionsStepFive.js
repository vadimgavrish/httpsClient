module.exports = function getHTML (options, callback) {

    var https = require('https');

    var input;

    https.get(options, function(response) {

        response.setEncoding('utf8');

        response.on('data', function (data) {

            input += data;

        });

        response.on('end', function(){

            callback(input);

            });

    });
};
