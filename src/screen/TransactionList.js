import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    FlatList,
    TouchableOpacity,
    Alert
} from 'react-native';
const { width, height } = Dimensions.get("window");

export default class TransactionList extends Component{
    constructor(props){
        super(props);
        this.state = {
            access_token : 'ZHA5d7MckEGI64tAixrQuunDeAyoNAngpluLzLKRjM61wTvlhv7VFGopXXIhljeI',
            body : ''
        }
    };

    componentDidMount(){
        this._callBackend();
    }

    _callBackend = async() => {
        await fetch('http://39.115.19.145:3000/api/system/historian',
            {method: 'GET',
            Accept: 'application/json',
            "headers" : {'Content-Type': 'application/json',
                         'X-Access-Token' : 'ZHA5d7MckEGI64tAixrQuunDeAyoNAngpluLzLKRjM61wTvlhv7VFGopXXIhljeI'}
            }).then(response=>response.json()).then((res=>{
                if(res.length!=0){
                    console.log(res)
                    this.setState({
                        body : res
                    });
                }
            }));
    }

    render(){
        return(
            <View>
                <Text>
                    sadas
                </Text>
            </View>
        )
    };
};