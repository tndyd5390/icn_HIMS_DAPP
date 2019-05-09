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
    AsyncStorage,
} from 'react-native';
import Colors from '../../util/Colors';
import firebase from 'react-native-firebase';

const { width, height } = Dimensions.get("window");
export default class InquiryHealthInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            id : '',
            pwd : '',
            fcm : '',
        }
    };

    componentDidMount(){
    }

    _login = async()=>{
       console.log("login")
        const params = {
            id : this.state.id,
            pwd : this.state.pwd,
        };
        const loginFcmToken = await firebase.messaging().getToken();
        const fcmToken = await AsyncStorage.getItem('fcmToken');
        this.setState({fcm : fcmToken});
        if(loginFcmToken !== fcmToken){
          await AsyncStorage.setItem('fcmToken', loginFcmToken);
        }
    
        await fetch('http://39.115.19.151:3000/user/login',
        {method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body : JSON.stringify(params),
        }).then(response=>response.json()).then((res=>{
            if(res.length!=0){
              this._storeData(JSON.stringify(res[0]));
              this.props.navigation.navigate('Menu');
            }else{
                alert('오류');
            }
        }));
    };

    _storeData = async(data) => {
        try{
            await AsyncStorage.setItem('userInfo', data);
        }catch(err){
            console.log(err);
        }
      }
    

    render() {
        return(
            <KeyboardAvoidingView style={{flex : 1, backgroundColor : Colors.white}}>
            {this.state.activityIndicator ? (
                <View style={{backgroundColor : 'rgba(0,0,0,0.2)', width : width, height : height, position : 'absolute', zIndex : 10, alignItems : 'center', justifyContent : 'center'}}>
                    <ActivityIndicator size="large" color="#10b5f1"/>
                </View>
            ) : (null)}
            <View style={[{display : 'flex'}, Platform.OS ==='ios' ? {marginTop : 10} : null]}>
              <TouchableOpacity
                style={{marginTop : 20, marginLeft : 20, marginBottom : 20}}
                onPress={()=>this.props.navigation.goBack()}
              >
              </TouchableOpacity>
            
              <View style={{alignItems : 'center'}}>
                <View style={{display : 'flex', width : width -60}}>
                  <Text style={{textAlign : 'left', fontSize : 17, fontWeight : '500'}}>아이디</Text>
                </View>
                <TextInput 
                  style={{
                    borderBottomWidth : 1, 
                    paddingTop : 5, 
                    paddingBottom : 5, 
                    width : width-60
                    }}
                  onChangeText={(text) => this.setState({id : text})}
                />
              </View>
    
              <View style={{alignItems : 'center', marginTop : 20}}>
                <View style={{display : 'flex', width : width -60}}>
                  <Text style={{textAlign : 'left', fontSize : 17, fontWeight : '500'}}>패스워드</Text>
                </View>
                <TextInput 
                  style={{
                    borderBottomWidth : 1, 
                    paddingTop : 5, 
                    paddingBottom : 5, 
                    width : width-60
                    }}
                  onChangeText={(text) => this.setState({pwd : text})}
                  secureTextEntry={true}
                />
              </View>
            </View>
    
            {/* <View style={{alignItems : 'center', marginTop : 20}}>
              <View style={{width : width -60, flexDirection : 'row', justifyContent : 'flex-end'}}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('FindEmail')}
                >
                  <Text style={{textAlign : 'right', fontSize : 17, fontWeight : '500', marginRight : 20}}>이메일 찾기</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('FindPassword')}
                >
                  <Text style={{textAlign : 'right', fontSize : 17, fontWeight : '500'}}>비밀번호 찾기</Text>
                </TouchableOpacity>
              </View>
            </View> */}
            
            <TouchableOpacity style={{width: width, 
                                      height: 50, 
                                      backgroundColor: Colors.buttonSky, 
                                      justifyContent: 'center', 
                                      alignItems: 'center',
                                      position: 'absolute',
                                      bottom: 0}}
                              onPress={this._login}>
              <Text style={{color : Colors.white, fontSize : 20, fontWeight : '700'}}>로그인</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        )
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