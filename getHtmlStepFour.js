var https = require('https');

function getHTML (options, callback) {

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

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

function printHTML (html) {
  console.log(html);
}

getAndPrintHTML(requestOptions, printHTML);