'use strict';
var hello = require('./hello')

process.nextTick(function () {
    console.log('nextTick callback!');
})

hello.greet("Steve")

var fs = require('fs')

fs.readFile('abc.txt', 'utf-8', function(err, data){
    if (err){
        console.log(err)
    }else{
        console.log(data)
    }
})
