var https = require('https');

function getAndPrintHTML (options) {

  var input;

  https.get(options, function(response) {

        response.setEncoding('utf8');

        response.on('data', function (data) {
            
            input += data;
            
        });

        response.on('end', function() {

          console.log(input);

        });
    });

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);