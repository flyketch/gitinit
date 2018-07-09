'use strict';

var s = "hello";

function greet(name){
    console.log(`${s}, ${name}!`);
}

function hello(name){
    console.log("hello world");
}

module.exports = {
    greet: greet,
    hello: hello,
}