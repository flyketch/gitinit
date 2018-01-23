#!/bin/bash

#here is comment

echo "Hello Steve"

a="Hello World"

echo "a is $a"
echo 'a is $a'

var_a="Linux"
readonly var_a
var_a="Unix"
echo "var_a is $var_a"

b="BB34"
echo ${b}
d=${b/BB/12}
echo $d
let "d+=1"
echo "d is $d"
