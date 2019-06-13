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
    Picker
} from "react-native";
import {
    CheckBox
} from "react-native-elements";
import Colors from "../../util/Colors";
const { width, height } = Dimensions.get("window");


export default class ShareRequest extends Component {
    constructor(props){
        super(props);
        this.state = {
            txType : '',
            userInfo : '',
            diseaseCode : ''
        }

    }

    render(){
        return(
            <KeyboardAvoidingView style={{flex : 1, backgroundColor : Colors.white}}>
                <ScrollView style={[{display : 'flex'}, Platform.OS ==='ios' ? {marginTop : 10} : null]} >
                <View style={{padding : 30, paddingBottom : 5}}>
                    <View style={{display : 'flex', width : width -60}}>
                        <Text style={{textAlign : 'left', fontSize : 17, fontWeight : '500'}}>송신자</Text>
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
                        <Picker.Item label="-" value="0000" />
                        <Picker.Item label="건강정보" value="0001" />
                    </Picker>
                </View>
                <View style={{padding : 30, paddingBottom : 10}}>
                    <View style={{display : 'flex', width : width -60}}>
                        <Text style={{textAlign : 'left', fontSize : 17, fontWeight : '500'}}>수신자</Text>
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
                        <Picker.Item label="-" value="0000" />
                        <Picker.Item label="건강정보" value="0001" />
                    </Picker>
                </View>
                <View style={{padding : 30, paddingBottom : 10}}>
                    <View style={{display : 'flex', width : width -60}}>
                        <Text style={{textAlign : 'left', fontSize : 17, fontWeight : '500'}}>정보선택</Text>
                    </View>
                    <View>
                        <CheckBox title="진단내역" containerStyle={{borderColor : Colors.white,backgroundColor : Colors.white}} textStyle={{fontSize : 17,color : Colors.grey}}/>
                        <CheckBox title="처치내역" containerStyle={{borderColor : Colors.white,backgroundColor : Colors.white}} textStyle={{fontSize : 17,color : Colors.grey}}/>
                        <CheckBox title="투약내역" containerStyle={{borderColor : Colors.white,backgroundColor : Colors.white}} textStyle={{fontSize : 17,color : Colors.grey}}/>
                        <CheckBox title="검체검사" containerStyle={{borderColor : Colors.white,backgroundColor : Colors.white}} textStyle={{fontSize : 17,color : Colors.grey}}/>
                        <CheckBox title="병리검사" containerStyle={{borderColor : Colors.white,backgroundColor : Colors.white}} textStyle={{fontSize : 17,color : Colors.grey}}/>
                        <CheckBox title="영상검사" containerStyle={{borderColor : Colors.white,backgroundColor : Colors.white}} textStyle={{fontSize : 17,color : Colors.grey}}/>
                        <CheckBox title="기능검사" containerStyle={{borderColor : Colors.white,backgroundColor : Colors.white}} textStyle={{fontSize : 17,color : Colors.grey}}/>
                    </View>
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
                    <Text style={{color : Colors.white, fontSize : 20, fontWeight : '700'}}>요청</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    };
}