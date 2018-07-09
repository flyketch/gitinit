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


var url = require('url')
console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash'));


var path = require('path')
var workPath = path.resolve('.')
console.log(workPath)

var ss = process.argv[0]
console.log(ss)
