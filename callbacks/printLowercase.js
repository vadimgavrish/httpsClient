var getHTML = require('../httpFunctionsStepFive');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printLowerCase (input) {

    console.log(input.toLowerCase());

}

getHTML(requestOptions, printLowerCase);