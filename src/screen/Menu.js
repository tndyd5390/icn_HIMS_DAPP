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
        this.state = {
            body : null
        }
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={{flex:1,justifyContent:"center"}}>
                    <View style={{alignItems: 'center'}}>
                        <TouchableOpacity 
                            style={{backgroundColor: 'skyblue', width: '60%', height: 40, alignItems: 'center', justifyContent: 'center', marginTop: 10}}
                            onPress={() => this.props.navigation.navigate("DocuList")}
                            >
                            <Text style={{color: 'white', fontSize: 20, fontWeight: '300'}}>디지털기록문서 생산현황</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <TouchableOpacity 
                            style={{backgroundColor: 'skyblue', width: '60%', height: 40, alignItems: 'center', justifyContent: 'center', marginTop: 10}}
                            onPress={() => this.props.navigation.navigate("ReadyList")}
                            >
                            <Text style={{color: 'white', fontSize: 20, fontWeight: '300'}}>이관준비목록 열람</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <TouchableOpacity 
                            style={{backgroundColor: 'skyblue', width: '60%', height: 40, alignItems: 'center', justifyContent: 'center', marginTop: 10}}
                            onPress={() => this.props.navigation.navigate("CompleteList")}
                            >
                            <Text style={{color: 'white', fontSize: 20, fontWeight: '300'}}>디지털기록문서 인수 목록</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <TouchableOpacity 
                            style={{backgroundColor: 'skyblue', width: '60%', height: 40, alignItems: 'center', justifyContent: 'center', marginTop: 10}}
                            onPress={() => this.props.navigation.navigate("InsertDocu")}
                            >
                            <Text style={{color: 'white', fontSize: 20, fontWeight: '300'}}>디지털기록문서 생성</Text>
                        </TouchableOpacity>
                    </View>
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