import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    TouchableOpacity,
    Alert
} from 'react-native';
import Colors from '../../util/Colors';
const { width, height } = Dimensions.get("window");
export default class InquiryHealthInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            id : '',
            pwd : '',
            name : ''
        }
    };

    componentDidMount(){
    }

    _insertUser = async()=>{
        const params = {
            id : this.state.id,
            pwd : this.state.pwd,
            name : this.state.name
        };

        await fetch('http://39.115.19.149:3000/user/insertUser',
        {method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body : JSON.stringify(params),
        }).then(response=>response.json()).then((res=>{
            if(res.length!=0){
                console.log(res);
                this.props.navigation.navigate("Init");
            }else{
                console.log('dd');
                Alert.alert(
                    '다른 ID를 입력하세요.',
                    '중복오류',
                    [
                        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                        {
                          text: 'Cancel',
                          onPress: () => console.log('Cancel Pressed'),
                          style: 'cancel',
                        },
                        {text: 'OK', onPress: () => console.log('OK Pressed')},
                      ],
                      {cancelable: false},
                )
            }
        }));
    };


    render() {
        return(
            
            <KeyboardAvoidingView style={{flex : 1, backgroundColor : Colors.white}}>
                <View style={[{display : 'flex'}, Platform.OS ==='ios' ? {marginTop : 10} : null]}>
                    <TouchableOpacity
                        style={{marginTop : 20, marginLeft : 20, marginBottom : 20}}
                        onPress={()=>this.props.navigation.goBack()}
                    >
                    </TouchableOpacity>
        
                    <View style={{alignItems : 'center'}}>
                        <View style={{paddingBottom:15}}>
                            <View style={{display : 'flex', width : width -60}}>
                                <Text style={{textAlign : 'left', fontSize : 17, fontWeight : '500'}}>아이디</Text>
                            </View>
                            <TextInput 
                                name='email'
                                style={{borderBottomWidth : 1, paddingTop : 5, paddingBottom : 5, width : width-60}} 
                                placeholder='아이디를 입력하세요.'
                                onChangeText={(text)=>this.setState({id : text})}
                                />
                        </View>
                        <View style={{paddingBottom:15}}>
                            <View style={{display : 'flex', width : width -60}}>
                                <Text style={{textAlign : 'left', fontSize : 17, fontWeight : '500'}}>패스워드</Text>
                            </View>
                            <TextInput 
                                name='email'
                                style={{borderBottomWidth : 1, paddingTop : 5, paddingBottom : 5, width : width-60}} 
                                placeholder='패스워드를 입력하세요.'
                                onChangeText={(text)=>this.setState({pwd : text})}
                                secureTextEntry={true}
                                />
                        </View>
                        <View style={{paddingBottom:15}}>
                            <View style={{display : 'flex', width : width -60}}>
                                <Text style={{textAlign : 'left', fontSize : 17, fontWeight : '500'}}>이름</Text>
                            </View>
                            <TextInput 
                                name='email'
                                style={{borderBottomWidth : 1, paddingTop : 5, paddingBottom : 5, width : width-60}} 
                                placeholder='이름을 입력하세요.'
                                onChangeText={(text)=>this.setState({name : text})}
                                />
                        </View>
                    </View>
                </View>

                
                <TouchableOpacity 
                    style={[{width: width, 
                    height: 50, 
                    backgroundColor: Colors.buttonSky, 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    position: 'absolute'}, 
                    Platform.OS === 'ios' ? {bottom : 20} : {bottom  : 0}]}
                    onPress={this._insertUser}
                >
                    <Text style={{color : Colors.white, fontSize : 20, fontWeight : '700'}}>가입하기</Text>
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