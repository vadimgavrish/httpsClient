var getHTML = require('../httpFunctionsStepFive');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (input) {

    console.log(input.toUpperCase());

}

getHTML(requestOptions, printUpperCase);