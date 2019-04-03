import React, { Component } from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
const { width, height } = Dimensions.get("window");

export default class Init extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={{alignItems: 'center'}}>
                    <TouchableOpacity 
                        style={{backgroundColor: 'skyblue', width: '40%', height: 40, alignItems: 'center', justifyContent: 'center', marginTop: 10}}
                        onPress={() => this.props.navigation.navigate("InquiryHealthInfo")}
                    >
                        <Text style={{color: 'white', fontSize: 15, fontWeight: '300'}}>건강정보 조회</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        width: width,
        height: height
    },
    buttonContainer: {
        width: width,
        alignItems: "center"
    }
})