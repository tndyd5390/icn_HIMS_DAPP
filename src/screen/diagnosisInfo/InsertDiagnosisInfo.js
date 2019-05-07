import React, {Component} from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    ScrollView
} from "react-native";
import Colors from "../../util/Colors";

const {width, height} = Dimensions.get("window");

export default class InsertDeagnosisInfo extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <ScrollView>
                <View style={{width: width, backgroundColor: Colors.white, borderWidth: 1, borderColor: Colors.black}}></View>
            </ScrollView>
        );
    }
}