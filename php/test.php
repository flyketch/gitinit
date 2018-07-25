<?php

    function getCmp($s){
        if (strcasecmp($s, "Hello")){
            echo "true";
        }
        else {
            echo "false";
        }
        echo strcasecmp($s, "Hello");
    }


    getCmp("hello");
    getCmp("hel");
    getCmp("helloooo");

?>