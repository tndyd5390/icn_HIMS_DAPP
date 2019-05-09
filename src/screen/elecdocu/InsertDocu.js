import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TextInput,
    FlatList,
    TouchableOpacity,
    Alert,
    ScrollView,
    Platform,
    KeyboardAvoidingView,
} from 'react-native';
import Colors from '../../util/Colors';
const { width, height } = Dimensions.get("window");

export default class InsertDocu extends Component {
    constructor(props){
        super(props);
        this.state = {
            bodyHash : '',
            docCategory : '',
            docNum : '',
            docSize : '',
            docTitle : '',
            preservePeriod : '',
            producer : '',
            productionDate : '',
            productionOrg : '',
            secureGrade : '',
        }
    }

    _getUserInfo = async() => {
        const userInfo = await AsyncStorage.getItem('userInfo');
        const fcmToken = await AsyncStorage.getItem('fcmToken');
        console.log(userInfo);
        this.setState({
            userName : JSON.parse(userInfo).NAME,
        });
    }

    _insertDocu = async() => {
        const params = {
            bodyHash : this.state.bodyHash,
            docCategory : this.state.docCategory,
            docNum : this.state.docNum,
            docSize : this.state.docSize,
            docTitle : this.state.docTitle,
            preservePeriod : this.state.preservePeriod,
            producer : this.state.producer,
            productionDate : this.state.productionDate,
            productionOrg : this.state.productionOrg,
            secureGrade : this.state.secureGrade,
            chainCodeId : 'test08'
        }
        await fetch('http://39.115.19.151:3000/api/insertDocu',
        {method: 'POST',
        Accept: 'application/json',
        "headers" : {'Content-Type': 'application/json',},
        body : JSON.stringify(params)
        }).then(response=>response.json()).then((res=>{
            console.log(res);
        }));



    }


    render(){
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
                            <Text style={{textAlign : 'left', fontSize : 17, fontWeight : '500'}}>문서 제목</Text>
                        </View>
                        <TextInput 
                            name='email'
                            style={{borderBottomWidth : 1, paddingTop : 5, paddingBottom : 5, width : width-60}} 
                            placeholder='문서 제목을 입력하세요.'
                            onChangeText={(text)=>this.setState({docTitle : text})}
                            />
                    </View>
                    <View style={{paddingBottom:15}}>
                        <View style={{display : 'flex', width : width -60}}>
                            <Text style={{textAlign : 'left', fontSize : 17, fontWeight : '500'}}>문서 카테고리</Text>
                        </View>
                        <TextInput 
                            name='email'
                            style={{borderBottomWidth : 1, paddingTop : 5, paddingBottom : 5, width : width-60}} 
                            placeholder='문서 카테고리를 입력하세요.'
                            onChangeText={(text)=>this.setState({docCategory : text})}
                            />
                    </View>
                    <View style={{paddingBottom:15}}>
                        <View style={{display : 'flex', width : width -60}}>
                            <Text style={{textAlign : 'left', fontSize : 17, fontWeight : '500'}}>문서 번호</Text>
                        </View>
                        <TextInput 
                            name='email'
                            style={{borderBottomWidth : 1, paddingTop : 5, paddingBottom : 5, width : width-60}} 
                            placeholder='문서 번호를 입력하세요.'
                            onChangeText={(text)=>this.setState({docNum : text})}
                            />
                    </View>
                    <View style={{paddingBottom:15}}>
                        <View style={{display : 'flex', width : width -60}}>
                            <Text style={{textAlign : 'left', fontSize : 17, fontWeight : '500'}}>문서 크기</Text>
                        </View>
                        <TextInput 
                            name='email'
                            style={{borderBottomWidth : 1, paddingTop : 5, paddingBottom : 5, width : width-60}} 
                            placeholder='문서 크기를 입력하세요.'
                            onChangeText={(text)=>this.setState({docSize : text})}
                            />
                    </View>
                    <View style={{paddingBottom:15}}>
                        <View style={{display : 'flex', width : width -60}}>
                            <Text style={{textAlign : 'left', fontSize : 17, fontWeight : '500'}}>보안등급</Text>
                        </View>
                        <TextInput 
                            name='email'
                            style={{borderBottomWidth : 1, paddingTop : 5, paddingBottom : 5, width : width-60}} 
                            placeholder='보안등급 입력하세요.'
                            onChangeText={(text)=>this.setState({secureGrade : text})}
                            />
                    </View>
                    <View style={{paddingBottom:15}}>
                        <View style={{display : 'flex', width : width -60}}>
                            <Text style={{textAlign : 'left', fontSize : 17, fontWeight : '500'}}>제작자</Text>
                        </View>
                        <TextInput 
                            name='email'
                            style={{borderBottomWidth : 1, paddingTop : 5, paddingBottom : 5, width : width-60}} 
                            placeholder='제작자를 입력하세요.'
                            onChangeText={(text)=>this.setState({producer : text})}
                            />
                    </View>
                    <View style={{paddingBottom:15}}>
                        <View style={{display : 'flex', width : width -60}}>
                            <Text style={{textAlign : 'left', fontSize : 17, fontWeight : '500'}}>제작기관</Text>
                        </View>
                        <TextInput 
                            name='email'
                            style={{borderBottomWidth : 1, paddingTop : 5, paddingBottom : 5, width : width-60}} 
                            placeholder='제작기관을 입력하세요.'
                            onChangeText={(text)=>this.setState({productionOrg : text})}
                            />
                    </View>
                    <View style={{paddingBottom:15}}>
                        <View style={{display : 'flex', width : width -60}}>
                            <Text style={{textAlign : 'left', fontSize : 17, fontWeight : '500'}}>제작일</Text>
                        </View>
                        <TextInput 
                            name='email'
                            style={{borderBottomWidth : 1, paddingTop : 5, paddingBottom : 5, width : width-60}} 
                            placeholder='제작일을 입력하세요.'
                            onChangeText={(text)=>this.setState({productionDate : text})}
                            />
                    </View>
                    <View style={{paddingBottom:15}}>
                        <View style={{display : 'flex', width : width -60}}>
                            <Text style={{textAlign : 'left', fontSize : 17, fontWeight : '500'}}>보관일</Text>
                        </View>
                        <TextInput 
                            name='email'
                            style={{borderBottomWidth : 1, paddingTop : 5, paddingBottom : 5, width : width-60}} 
                            placeholder='보관일을 입력하세요.'
                            onChangeText={(text)=>this.setState({preservePeriod : text})}
                            />
                    </View>
                    <View style={{paddingBottom:65}}>
                        <View style={{display : 'flex', width : width -60}}>
                            <Text style={{textAlign : 'left', fontSize : 17, fontWeight : '500'}}>문서 해쉬값</Text>
                        </View>
                        <TextInput 
                            name='email'
                            style={{borderBottomWidth : 1, paddingTop : 5, paddingBottom : 5, width : width-60}} 
                            placeholder='문서 해쉬값을 입력하세요.'
                            onChangeText={(text)=>this.setState({bodyHash : text})}
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
                onPress={this._insertDocu}
            >
                <Text style={{color : Colors.white, fontSize : 20, fontWeight : '700'}}>생성</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
        );
    }

}   