import React, {Component} from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Platform,
    TextInput,
    KeyboardAvoidingView,
    AsyncStorage,
    ScrollView,
    Picker,
    Alert
} from "react-native";
import Colors from "../../util/Colors";
const { width, height } = Dimensions.get("window");

export default class ShareSearch extends Component {
    constructor(props){
        super(props);

        this.state = {
            txType : '0000',
            userInfo : '',
            diseaseCode : ''
        }
    }

    _getUserInfo = async() => {
        const userInfo = await AsyncStorage.getItem('userInfo');
        return JSON.parse(userInfo).NAME;
    }

    _search = async() => {
        const queryJSON = {
            cert: await this._getUserInfo(),
            txtype: "0002"
        }
        const param = {
            queryJsonString: JSON.stringify(queryJSON),
            chainCodeId: "queryString"
        }
        fetch("http://39.115.19.149:4000/queryStringByArray", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(param)
        })
        .then((resp) => resp.json())
        .then((res) => {
            if(res.length != 0){
                this.props.navigation.navigate("ShareList", {
                    ShareList : res
                })
            }else{
                alert("공유기록이 없습니다.");
            }
        })

    }

    
    render(){
        return(
            <KeyboardAvoidingView style={{flex : 1, backgroundColor : Colors.white}}>
                <ScrollView style={[{display : 'flex'}, Platform.OS ==='ios' ? {marginTop : 10} : null]} >
                <View style={{padding : 30}}>
                    <View style={{display : 'flex', width : width -60}}>
                        <Text style={{textAlign : 'left', fontSize : 17, fontWeight : '500'}}>종류</Text>
                    </View>
                    <Picker
                        selectedValue={this.state.txType}
                        style={{height: 50, width: 300}}
                        onValueChange={(itemValue, itemIndex) =>
                            {
                                this.setState({txType: itemValue})
                                if(itemValue == '0001'){
                                    this.setState({search: 'patientname'})
                                }else{
                                    this.setState({search : 'name'})
                                }
                            }
                        }>
                        <Picker.Item label="진료기록" value="0000" />
                        <Picker.Item label="건강정보" value="0001" />
                    </Picker>
                </View>
                </ScrollView>
                <TouchableOpacity 
                    style={[{width: width, 
                    height: 50, 
                    backgroundColor: Colors.buttonSky, 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    position: 'absolute'}, 
                    Platform.OS === 'ios' ? {bottom : 20} : {bottom  : 0}]}
                    onPress={this._search}
                >
                    <Text style={{color : Colors.white, fontSize : 20, fontWeight : '700'}}>검색</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    };
}