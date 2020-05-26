import React from "react";

import {useWindowDimensions, styleSheet} from "react-native";

var windowWidth = useWindowDimensions().width;
var windowHeight = useWindowDimensions().height;
const styles = StyleSheet.create({imageFormatting: {padding: 25, width: windowWidth, height: windowHeight}});

export default function landingPage2(){
    

    return(
        <img  style = {style.imageFormatting} src = {require("./images/Matthew.png")}
                    />

                    // style = {{width: windowWidth, height: windowHeight, padding: "25px", borderStyle: "groove", borderWidth: "medium", borderRadius: "25px", 
                    // position: "bottomleft"}}
    )
}