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
    ScrollView
} from "react-native";
import Colors from '../../util/Colors';

const {width, height} = Dimensions.get("window");

export default class InsertDiagnosisInfo extends Component{
    constructor(props){
        super(props);
        this.state = {
            key : '',
            txType : 'tx0001',
            date : '',
            hostpital : '',
            deptOfMedichine : '',
            doctor : '',
            diseaseCode : '',
            medicalHistory : '',
            originalURL : '',
            partientName : '',
            userInfo : ''
        }
    }

    componentDidMount(){
        this._getUserInfo();
    }

    _getUserInfo = async() => {
        const userInfo = await AsyncStorage.getItem('userInfo');
        const fcmToken = await AsyncStorage.getItem('fcmToken');

        this.setState({userInfo : userInfo});
    }

    _insertDiagnosisInfo = async() => {
        var date = this._nowDate();
        const params = {
            key : date.toString(),
            txType : 'tx0001',
            date : date.toString(),
            hostpital : this.state.hostpital,
            deptOfMedichine : this.state.deptOfMedichine,
            doctor : this.state.doctor,
            diseaseCode : this.state.diseaseCode,
            medicalHistory : this.state.medicalHistory,
            originalURL : this.state.originalURL,
            partientName : this.state.partientName,
        };

        await fetch('http://39.115.19.149:3000/api/insertDiagnosisInfo',
            {method: 'POST',
            Accept: 'application/json',
            "headers" : {'Content-Type': 'application/json',},
            body : JSON.stringify(params)
            }).then(response=>response.json()).then((res=>{
                if(res.length!=0){
                    console.log(res)
                    this.setState({
                        body : res
                    });
                }
            }));

    }

    _nowDate = () => {
        var date = new Date();
        var nowMilliseconds = date.getFullYear().toString()+(date.getMonth()+1).toString() +date.getDate().toString() + date.getMilliseconds().toString();
          
        console.log(nowMilliseconds);
        return nowMilliseconds;
    }
    
    render() {
        return(
            <KeyboardAvoidingView style={{flex : 1, backgroundColor : Colors.white}}>
                <ScrollView style={[{display : 'flex'}, Platform.OS ==='ios' ? {marginTop : 10} : null]} >
                    <TouchableOpacity
                        style={{marginTop : 20, marginLeft : 20, marginBottom : 20}}
                        onPress={()=>this.props.navigation.goBack()}
                    >
                    </TouchableOpacity>
        
                    <View style={{alignItems : 'center'}}>
                        <View style={{paddingBottom:15}}>
                            <View style={{display : 'flex', width : width -60}}>
                                <Text style={{textAlign : 'left', fontSize : 17, fontWeight : '500'}}>환자이름</Text>
                            </View>
                            <TextInput 
                                name='email'
                                style={{borderBottomWidth : 1, paddingTop : 5, paddingBottom : 5, width : width-60}} 
                                placeholder='환자이름을 입력하세요.'
                                onChangeText={(text)=>this.setState({partientName : text})}
                                />
                        </View>
                        <View style={{paddingBottom:15}}>
                            <View style={{display : 'flex', width : width -60}}>
                                <Text style={{textAlign : 'left', fontSize : 17, fontWeight : '500'}}>병원</Text>
                            </View>
                            <TextInput 
                                name='email'
                                style={{borderBottomWidth : 1, paddingTop : 5, paddingBottom : 5, width : width-60}} 
                                placeholder='병원을 입력하세요.'
                                onChangeText={(text)=>this.setState({hostpital : text})}
                                />
                        </View>
                        <View style={{paddingBottom:15}}>
                            <View style={{display : 'flex', width : width -60}}>
                                <Text style={{textAlign : 'left', fontSize : 17, fontWeight : '500'}}>진료부서</Text>
                            </View>
                            <TextInput 
                                name='email'
                                style={{borderBottomWidth : 1, paddingTop : 5, paddingBottom : 5, width : width-60}} 
                                placeholder='진료부서를 입력하세요.'
                                onChangeText={(text)=>this.setState({deptOfMedichine : text})}
                                />
                        </View>
                        <View style={{paddingBottom:15}}>
                            <View style={{display : 'flex', width : width -60}}>
                                <Text style={{textAlign : 'left', fontSize : 17, fontWeight : '500'}}>담당의사</Text>
                            </View>
                            <TextInput 
                                name='email'
                                style={{borderBottomWidth : 1, paddingTop : 5, paddingBottom : 5, width : width-60}} 
                                placeholder='담당의사를 입력하세요.'
                                onChangeText={(text)=>this.setState({doctor : text})}
                                />
                        </View>
                        <View style={{paddingBottom:15}}>
                            <View style={{display : 'flex', width : width -60}}>
                                <Text style={{textAlign : 'left', fontSize : 17, fontWeight : '500'}}>질병코드</Text>
                            </View>
                            <TextInput 
                                name='email'
                                style={{borderBottomWidth : 1, paddingTop : 5, paddingBottom : 5, width : width-60}} 
                                placeholder='질병코드를 입력하세요.'
                                onChangeText={(text)=>this.setState({diseaseCode : text})}
                                />
                        </View>
                        <View style={{paddingBottom:15}}>
                            <View style={{display : 'flex', width : width -60}}>
                                <Text style={{textAlign : 'left', fontSize : 17, fontWeight : '500'}}>진료기록</Text>
                            </View>
                            <TextInput 
                                name='email'
                                style={{borderBottomWidth : 1, paddingTop : 5, paddingBottom : 5, width : width-60}} 
                                placeholder='진료기록을 입력하세요.'
                                onChangeText={(text)=>this.setState({medicalHistory : text})}
                                />
                        </View>
                        <View style={{paddingBottom:15}}>
                            <View style={{display : 'flex', width : width -60}}>
                                <Text style={{textAlign : 'left', fontSize : 17, fontWeight : '500'}}>원본기록</Text>
                            </View>
                            <TextInput 
                                name='email'
                                style={{borderBottomWidth : 1, paddingTop : 5, paddingBottom : 5, width : width-60}} 
                                placeholder='원본기록을 입력하세요.'
                                onChangeText={(text)=>this.setState({originalURL : text})}
                                />
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
                    onPress={this._insertDiagnosisInfo}
                >
                    <Text style={{color : Colors.white, fontSize : 20, fontWeight : '700'}}>생성</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
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