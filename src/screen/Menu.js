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
                            onPress={() => this.props.navigation.navigate("SearchInfo")}
                            >
                            <Text style={{color: 'white', fontSize: 20, fontWeight: '300'}}>개인건강정보 조회</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <TouchableOpacity 
                            style={{backgroundColor: 'skyblue', width: '60%', height: 40, alignItems: 'center', justifyContent: 'center', marginTop: 10}}
                            onPress={() => this.props.navigation.navigate("TransactionList")}
                            >
                            <Text style={{color: 'white', fontSize: 20, fontWeight: '300'}}>트랜잭션 이력 조회</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <TouchableOpacity 
                            style={{backgroundColor: 'skyblue', width: '60%', height: 40, alignItems: 'center', justifyContent: 'center', marginTop: 10}}
                            onPress={() => this.props.navigation.navigate("ShareRequest")}
                            >
                            <Text style={{color: 'white', fontSize: 20, fontWeight: '300'}}>의료정보공유 요청</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <TouchableOpacity 
                            style={{backgroundColor: 'skyblue', width: '60%', height: 40, alignItems: 'center', justifyContent: 'center', marginTop: 10}}
                            onPress={() => this.props.navigation.navigate("ShareSearch")}
                            >
                            <Text style={{color: 'white', fontSize: 20, fontWeight: '300'}}>공유정보 조회</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <TouchableOpacity 
                            style={{backgroundColor: 'skyblue', width: '60%', height: 40, alignItems: 'center', justifyContent: 'center', marginTop: 10}}
                            onPress={() => this.props.navigation.navigate("InsertList")}
                            >
                            <Text style={{color: 'white', fontSize: 20, fontWeight: '300'}}>건강정보기록</Text>
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