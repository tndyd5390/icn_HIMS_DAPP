import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TextInput,
    FlatList,
    TouchableOpacity,
    AsyncStorage,
    Alert,
    ScrollView,
    Platform
} from 'react-native';
import Colors from '../../util/Colors';
const { width, height } = Dimensions.get("window");

export default class DocuList extends Component {
    constructor(props){
        super(props);
        this.state = {
            userName : '',
            producer : '',
            body : ''
        }

    }
    componentDidMount(){
        this._getUserInfo();
        this._getDocuList();
    }

    _getUserInfo = async() => {
        const userInfo = await AsyncStorage.getItem('userInfo');
        const fcmToken = await AsyncStorage.getItem('fcmToken');
        console.log(userInfo);
        this.setState({
            userName : JSON.parse(userInfo).NAME,
            producer : JSON.parse(userInfo).PRODUCER,
        });
    }
    _getDocuList = async() => {
        var params = {
                    chainCodeId : "test08"
                };
        await fetch('http://39.115.19.151:3000/api/queryAll',
            {method: 'POST',
            Accept: 'application/json',
            "headers" : {'Content-Type': 'application/json',},
            body : JSON.stringify(params)
            }).then(response=>response.json()).then((res=>{
                if(res.length!=0){
                    console.log(res);
                        this.setState({
                            body : res
                        });
                }
            }));
    }

    _keyExtractor = (item) => item.Key;

    render(){
        return(
            <ScrollView style={[{display : 'flex', backgroundColor : 'white'}, Platform.OS ==='ios' ? {marginTop : 10} : null]} >
                        <View style={{
                flex:1,
                flexDirection: 'row',
                paddingHorizontal: 10,
                paddingVertical: 5,
                height : 80,
                marginBottom : 5,
                backgroundColor : Colors.lightGrey
                 }}>
            <View style={{justifyContent: 'center', alignItems : 'center', marginLeft : 10, width : '15%'}}>
                <View>
                    <Text style={{fontSize : 22, fontWeight : 'bold'}}>문서 번호</Text>
                </View>
            </View>            
            <View style={{justifyContent: 'center', alignItems : 'center',width : '20%'}}>
                <View>
                    <Text style={{fontSize : 22, fontWeight : 'bold'}}>문서 제목</Text>
                </View>
            </View>            
            <View style={{justifyContent: 'center', alignItems : 'center',  width : '10%'}}>
                <View>
                    <Text style={{fontSize : 22, fontWeight : 'bold'}}>문서 카테고리</Text>
                </View>
            </View>            
            <View style={{justifyContent: 'center', alignItems : 'center', width : '10%'}}>
                <View>
                    <Text style={{fontSize : 22, fontWeight : 'bold'}}>제작자</Text>
                </View>
            </View>            
            <View style={{justifyContent: 'center', alignItems : 'center', width : '10%'}}>
                <View>
                    <Text style={{fontSize : 22, fontWeight : 'bold'}}>제작기관</Text>
                </View>
            </View>            
            <View style={{justifyContent: 'center', alignItems : 'center', width : '10%'}}>
                <View>
                    <Text style={{fontSize : 22, fontWeight : 'bold'}}>문서 크기</Text>
                </View>
            </View>            
            <View style={{justifyContent: 'center', alignItems : 'center', width : '10%'}}>
                <View>
                    <Text style={{fontSize : 22, fontWeight : 'bold'}}>보안등급</Text>
                </View>
            </View>            
            <View style={{justifyContent: 'center', alignItems : 'center', width : '10%'}}>
                <View>
                    <Text style={{fontSize : 22, fontWeight : 'bold'}}>제작일</Text>
                </View>
            </View>            
        </View>
            <FlatList 
                data={this.state.body} 
                keyExtractor={this._keyExtractor}
                renderItem={({item}) => (
                    <DocuAllList res={item} />
                    )
                }
            />
         </ScrollView>
        )
    }
}


class DocuAllList extends Component {
    constructor(props){
        super(props);
        this.state = {
            res : this.props.res
        }
    }

    render(){
        return(
            <TouchableOpacity>
                <DocuInfo res={this.state.res}/>
            </TouchableOpacity>
        )
    }
};

class DocuInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            bodyHash : this.props.res.Record.body_hash,
            docCategory : this.props.res.Record.doc_category,
            docNum : this.props.res.Record.doc_num,
            docSize : this.props.res.Record.doc_size,
            docTitle : this.props.res.Record.doc_title,
            preservePeriod : this.props.res.Record.preserve_period,
            producer : this.props.res.Record.producer,
            productionDate : this.props.res.Record.production_date,
            productionOrg : this.props.res.Record.production_org,
            secureGrade : this.props.res.Record.secure_grade,
        }
    }

    render(){
        return(
            <View style={{
                flex:1,
                flexDirection: 'row',
                paddingHorizontal: 10,
                paddingVertical: 5,
                height : 50,
                marginBottom : 5,
                backgroundColor : this.props.backColor
        }}>
            <View style={{justifyContent: 'center', alignItems : 'center', marginLeft : 10, width : '15%'}}>
                <View>
                    <Text style={{fontSize : 20, fontWeight : 'bold'}}>{this.state.docNum}</Text>
                </View>
            </View>            
            <View style={{justifyContent: 'center', alignItems : 'center',width : '20%'}}>
                <View>
                    <Text style={{fontSize : 20, fontWeight : 'bold'}}>{this.state.docTitle}</Text>
                </View>
            </View>            
            <View style={{justifyContent: 'center', alignItems : 'center',  width : '10%'}}>
                <View>
                    <Text style={{fontSize : 20, fontWeight : 'bold'}}>{this.state.docCategory}</Text>
                </View>
            </View>            
            <View style={{justifyContent: 'center', alignItems : 'center', width : '10%'}}>
                <View>
                    <Text style={{fontSize : 20, fontWeight : 'bold'}}>{this.state.producer}</Text>
                </View>
            </View>            
            <View style={{justifyContent: 'center', alignItems : 'center', width : '10%'}}>
                <View>
                    <Text style={{fontSize : 20, fontWeight : 'bold'}}>{this.state.productionOrg}</Text>
                </View>
            </View>            
            <View style={{justifyContent: 'center', alignItems : 'center', width : '10%'}}>
                <View>
                    <Text style={{fontSize : 20, fontWeight : 'bold'}}>{this.state.docSize}</Text>
                </View>
            </View>            
            <View style={{justifyContent: 'center', alignItems : 'center', width : '10%'}}>
                <View>
                    <Text style={{fontSize : 20, fontWeight : 'bold'}}>{this.state.secureGrade}</Text>
                </View>
            </View>            
            <View style={{justifyContent: 'center', alignItems : 'center', width : '10%'}}>
                <View>
                    <Text style={{fontSize : 20, fontWeight : 'bold'}}>{this.state.productionDate}</Text>
                </View>
            </View>            
        </View>
        )
    }
}