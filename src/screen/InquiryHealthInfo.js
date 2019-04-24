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
export default class InquiryHealthInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            body : ''
        }
    };

    componentDidMount(){
        this._callBackend();
    }

    _callBackend = async() => {
        await fetch('http://39.115.19.145:3000/api/org.example.user.User',
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
    _keyExtractor = (item) => item.uID;

    render() {
        return(
            <View style={styles.container}>
                <View stlye={{flex:1}}>
                    <FlatList 
                        data={this.state.body} 
                        keyExtractor={this._keyExtractor}
                        renderItem={({item}) => (
                            <UserList res={item} />
                            )
                        }
                    />
                </View>
            </View>
        )
    }
}
class UserList extends Component {
    constructor(props){
        super(props);
        this.state = {
            res : this.props.res
        }
    }

    _onPress = () =>{
        this._callTransaction();
    }

    _callTransaction = async() =>{
        const param ="resource:org.example.user.User#"+this.state.res.uID;
        var ww = encodeURIComponent(param);
        await fetch('http://39.115.19.145:3000/api/queries/selectMyRecordData?user='+ww,
        {method: 'GET',
        Accept: 'application/json',
        "headers" : {'Content-Type': 'application/json',
        'X-Access-Token' : 'ZHA5d7MckEGI64tAixrQuunDeAyoNAngpluLzLKRjM61wTvlhv7VFGopXXIhljeI'}
        }).then(response=>response.json()).then((res=>{
            if(res.length!=0){
                console.log(res);
            }else{
                console.log("null");
            }
        }));
    }

    render(){
        return(
            <TouchableOpacity onPress={this._onPress}>
                <Profile res = {this.state.res}/>
            </TouchableOpacity>
        );
    };
}

class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            name : this.props.res.name,
            age : this.props.res.age,
            uID : this.props.res.uID 
        }
    };
    render(){
        return(
            <View style={{
                    flex:1,
                    flexDirection: 'row',
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    height : 130,
                    marginBottom : 5,
                    backgroundColor : this.props.backColor
            }}>
                <View style={{justifyContent: 'center', marginLeft : 15}}>
                    <View>
                        <Text style={{fontSize : 20, fontWeight : 'bold'}}>{this.state.name}</Text>
                    </View>
                </View>            
            </View>
        )
    };
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