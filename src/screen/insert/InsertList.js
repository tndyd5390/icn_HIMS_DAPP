import React, {Component} from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    FlatList,
} from "react-native";
const {width, height} = Dimensions.get("window");

export default class InsertList extends Component{
    constructor(props){
        super(props);
    }

    render() {
        const menu = [
            {name : '진료기록 생성', navi : 'InsertDiagnosisInfo'},
            {name : '건강기록 생성', navi : 'InsertHealthInfo'}
        ]
        return(
            <View style={styles.container}>
                <FlatList
                    data = {menu}
                    renderItem ={({item})=> <MenuList data={item} navigation={this.props.navigation}/>}
                />
            </View>
        );
    }
}

class MenuList extends Component {
    constructor(props){
        super(props)
        this.state = {
            data : this.props.data
        }
    }

    _onPress = () => {
        this.props.navigation.navigate(this.state.data.navi);        
    }

    render(){
        return(
            <TouchableOpacity
                onPress={this._onPress}
            >
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
                            <Text style={{fontSize : 20, fontWeight : 'bold'}}>{this.state.data.name}</Text>
                        </View>
                    </View>            
                    <View style={{justifyContent: 'center', marginLeft : 15}}>
                        <View>
                            <Text style={{fontSize : 20, fontWeight : 'bold'}}>{this.state.data.navi}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
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