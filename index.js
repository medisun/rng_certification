'use strict';

var fs = require('fs');
var util = require('util');
var Promise = require("bluebird");
var randomNumber = require("random-number-csprng");

const filename = util.format('rng_test_%d_%d.txt', Date.now(), Math.random());
const logFileStream = fs.createWriteStream(filename);

/**
 * Here defined way to handle each numer
 * @param  {integer} n 
 * @return {void}
 */
 function logNumber (n) {
  // uncoment if you want see number in console also or if you want use piping
  console.log('number: ', n);
  logFileStream.write(n + "\n");
}

/**
 * Main loop function
 * @return {void}
 */
 function main () {
  var generationPromises = [];

  // random number loop
  for (var i = 0; i < 1000; i++) {
    var generationPromise = Promise.try(function() {

      // Call random muber package
      return randomNumber(1, 66);

    }).then(function(number) {

      logNumber(number);

    }).catch({code: "RandomGenerationError"}, function(err) {

      logNumber(-1);

    });

    generationPromises.push(generationPromise)
  }

  Promise.all(generationPromises)
  .then(function(){
    logFileStream.end();
  })
}

main()
