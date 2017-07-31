var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  var input;

  https.get(requestOptions, function(response) {

        response.setEncoding('utf8');

        response.on('data', function (data) {
            
            input += data;
            
        });

        response.on('end', function() {

          console.log(input);

        });

    });

}

getAndPrintHTML();