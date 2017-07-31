var getHTML = require('../httpFunctionsStepFive');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printReverse (input) {

    console.log(input.split("").reverse().join(""));

}

getHTML(requestOptions, printReverse);