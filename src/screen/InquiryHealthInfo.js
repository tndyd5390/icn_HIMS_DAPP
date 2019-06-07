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
    Platform
} from 'react-native';
import Colors from '../util/Colors';
const { width, height } = Dimensions.get("window");
export default class InquiryHealthInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            name : '',
            body : ''
        }
    };

    componentDidMount(){
        this._callBackend();
    }
    _callBackend = async() => {
        var params = {"arr": this.props.navigation.getParam("params"), 
                    "option":"and", "chainCodeId" : this.props.navigation.getParam("chainCodeId") }
        await fetch('http://39.115.19.149:3000/api/getStringByArr',
            {method: 'POST',
            Accept: 'application/json',
            "headers" : {'Content-Type': 'application/json',},
            body : JSON.stringify(params)
            }).then(response=>response.json()).then((res=>{
                if(res.length!=0){
                        this.setState({
                            body : res
                        });
                    // }else{
                    //     Alert.alert(
                    //         'PERMISSION ERR',
                    //         res.err,
                    //         [
                    //             {text : '뒤로가기', onPress : () => this.props.navigation.goBack()}
                    //         ],
                    //         {cancelable : false}
                    //     )
                    // }
                }
            }));
    }
    _keyExtractor = (item) => item.key;

    render() {
        return(
                <ScrollView style={[{display : 'flex', backgroundColor : 'white'}, Platform.OS ==='ios' ? {marginTop : 10} : null]} >
                <View style={{
                    flex:1,
                    flexDirection: 'row',
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    height : 70,
                    backgroundColor : Colors.buttonBlue
                 }}>
                <View style={{justifyContent: 'center',alignItems : 'center', marginLeft : 22}}>
                    <View>
                        <Text style={{fontSize : 20,color : Colors.white,fontWeight : 'bold'}}>진료일자</Text>
                    </View>
                </View>            
                <View style={{justifyContent: 'center', marginLeft : 31}}>
                    <View>
                        <Text style={{fontSize : 20, color : Colors.white,fontWeight : 'bold'}}>진료병원</Text>
                    </View>
                </View>            
                <View style={{justifyContent: 'center', marginLeft : 15}}>
                    <View>
                        <Text style={{fontSize : 20, color : Colors.white,fontWeight : 'bold'}}>진료의사</Text>
                    </View>
                </View>            
                <View style={{justifyContent: 'center', marginLeft : 15}}>
                    <View>
                        <Text style={{fontSize : 20, color : Colors.white,fontWeight : 'bold'}}>진료과</Text>
                    </View>
                </View>            
            </View>
                    <FlatList 
                        data={this.state.body} 
                        keyExtractor={this._keyExtractor}
                        renderItem={({item}) => (
                            <Tx0001List res={item} />
                            )
                        }
                    />
                 </ScrollView>
        )
    }
}
class Tx0001List extends Component {
    constructor(props){
        super(props);
        this.state = {
            res : this.props.res
        }
    }
    
    _onPress = () => {
        console.log(this.state.res);
    }

    render(){
        return(
            <TouchableOpacity onPress={this._onPress}>
                <Info res = {this.state.res}/>
            </TouchableOpacity>
        );
    };
}

class Info extends Component {
    constructor(props){
        super(props);
        this.state = {
            patientname : this.props.res.Record.patientname,
            doctor : this.props.res.Record.doctor,
            hospital : this.props.res.Record.hospital,
            date : this.props.res.Record.date,
            deptofmedicine : this.props.res.Record.deptofmedicine,
        }
    };
    render(){
        return(
            <View style={{
                    flex:1,
                    flexDirection: 'row',
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    height : 90,
                    marginBottom : 5,
                    backgroundColor : this.props.backColor
            }}>
                <View style={{justifyContent: 'center', marginLeft : 10}}>
                    <View>
                        <Text style={{fontSize : 20, fontWeight : 'bold'}}>{this.state.date}</Text>
                    </View>
                </View>            
                <View style={{justifyContent: 'center', marginLeft : 15}}>
                    <View>
                        <Text style={{fontSize : 20, fontWeight : 'bold'}}>{this.state.hospital}</Text>
                    </View>
                </View>            
                <View style={{justifyContent: 'center', marginLeft : 15}}>
                    <View>
                        <Text style={{fontSize : 20, fontWeight : 'bold'}}>{this.state.doctor}</Text>
                    </View>
                </View>            
                <View style={{justifyContent: 'center', marginLeft : 15}}>
                    <View>
                        <Text style={{fontSize : 20, fontWeight : 'bold'}}>{this.state.deptofmedicine}</Text>
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