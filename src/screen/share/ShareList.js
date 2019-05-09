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
const { width, height } = Dimensions.get("window");
export default class InquiryHealthInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            name : '',
            body : this.props.navigation.getParam("ShareList")
        }
        console.log(this.state);
    };
    _keyExtractor = (item) => item.key;

    render() {
        return(
                <ScrollView style={[{display : 'flex', backgroundColor : 'white'}, Platform.OS ==='ios' ? {marginTop : 10} : null]} >
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
            provider : this.props.res.Record.provider,
            purpose : this.props.res.Record.purpose,
            requester : this.props.res.Record.requester,
            shareditems : this.props.res.Record.shareditems,
            date: this.props.res.Record.date
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
                <View style={{justifyContent: 'center', marginLeft : 5}}>
                    <View>
                        <Text style={{fontSize : 20, fontWeight : 'bold'}}>{this.state.date}</Text>
                    </View>
                </View>            
                <View style={{justifyContent: 'center', marginLeft : 5}}>
                    <View>
                        <Text style={{fontSize : 20, fontWeight : 'bold'}}>{this.state.shareditems}</Text>
                    </View>
                </View>     
                <View style={{justifyContent: 'center', marginLeft : 5}}>
                    <View>
                        <Text style={{fontSize : 20, fontWeight : 'bold'}}>{this.state.requester}</Text>
                    </View>
                </View>    
                <View style={{justifyContent: 'center', marginLeft : 5}}>
                    <View>
                        <Text style={{fontSize : 20, fontWeight : 'bold'}}>{this.state.purpose}</Text>
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