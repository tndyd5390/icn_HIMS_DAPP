import React, {Component} from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions
} from "react-native";
const {width, height} = Dimensions.get("window");

export default class InsertDeagnosisInfo extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <View><Text>something</Text></View>
        );
    }
}