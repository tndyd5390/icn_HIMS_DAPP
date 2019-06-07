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
                    chainCodeId : "docu"
                };
        await fetch('http://39.115.19.149:3000/api/queryAll',
            {method: 'POST',
            Accept: 'application/json',
            "headers" : {'Content-Type': 'application/json',},
            body : JSON.stringify(params)
            }).then(response=>response.json()).then((res=>{
                console.log("");
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
            <View style={{justifyContent: 'center', alignItems : 'center', marginLeft : 5, width : '15%'}}>
                <View>
                    <Text style={{fontSize : 15, fontWeight : 'bold'}}>문서등록번호</Text>
                </View>
            </View>            
            <View style={{justifyContent: 'center', alignItems : 'center',width : '23%'}}>
                <View>
                    <Text style={{fontSize : 15, fontWeight : 'bold'}}>문서제목</Text>
                </View>
            </View>            
            <View style={{justifyContent: 'center', alignItems : 'center',  width : '10%'}}>
                <View>
                    <Text style={{fontSize : 15, fontWeight : 'bold'}}>문서유형</Text>
                </View>
            </View>            
                <View style={{justifyContent: 'center', alignItems : 'center', width : '5%'}}>
                    <View>
                        <Text style={{fontSize : 15, fontWeight : 'bold'}}>문서크기</Text>
                    </View>
                </View>            
            <View style={{justifyContent: 'center', alignItems : 'center', width : '5%'}}>
                <View>
                    <Text style={{fontSize : 15, fontWeight : 'bold'}}>보안등급</Text>
                </View>
            </View>            
            <View style={{justifyContent: 'center', alignItems : 'center', width : '5%'}}>
                <View>
                    <Text style={{fontSize : 15, fontWeight : 'bold'}}>보존기간</Text>
                </View>
            </View>    
            <View style={{justifyContent: 'center', alignItems : 'center', width : '10%'}}>
                <View>
                    <Text style={{fontSize : 15, fontWeight : 'bold'}}>실존장소</Text>
                </View>
            </View>             
            <View style={{justifyContent: 'center', alignItems : 'center', width : '10%'}}>
                <View>
                    <Text style={{fontSize : 15, fontWeight : 'bold'}}>생산기관</Text>
                </View>
            </View>            
            <View style={{justifyContent: 'center', alignItems : 'center', width : '7%'}}>
                <View>
                    <Text style={{fontSize : 15, fontWeight : 'bold'}}>생산자</Text>
                </View>
            </View>            
            <View style={{justifyContent: 'center', alignItems : 'center', width : '10%'}}>
                <View>
                    <Text style={{fontSize : 15, fontWeight : 'bold'}}>생산일자</Text>
                </View>
            </View>            
             
        </View>
            <FlatList 
                data={this.state.body} 
                keyExtractor={this._keyExtractor}
                renderItem={({item}) => (
                    <DocuAllList res={item} navigation={this.props.navigation}/>
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
            res : this.props.res,
        }
    }

    _goHistoryList = () =>{
        this.props.navigation.navigate("HistoryList",{"key" : this.props.res.Key})
    }

    render(){
        return(
            <TouchableOpacity onPress={this._goHistoryList}>
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
            processer : this.props.res.Record.processer,
            processOrg : this.props.res.Record.process_org,
            processDate : this.props.res.Record.process_date,
            processType : this.props.res.Record.process_type,
            processResult : this.props.res.Record.process_result,
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
            <View style={{justifyContent: 'center', alignItems : 'center', marginLeft : 5, width : '15%'}}>
                <View>
                    <Text style={{fontSize : 20, fontWeight : 'bold'}}>{this.state.docNum}</Text>
                </View>
            </View>            
            <View style={{justifyContent: 'center', alignItems : 'center',width : '23%'}}>
                <View>
                    <Text style={{fontSize : 15, fontWeight : 'bold'}}>{this.state.docTitle}</Text>
                </View>
            </View>            
            <View style={{justifyContent: 'center', alignItems : 'center',  width : '10%'}}>
                <View>
                    <Text style={{fontSize : 15, fontWeight : 'bold'}}>{this.state.docCategory}</Text>
                </View>
            </View>            
                <View style={{justifyContent: 'center', alignItems : 'center', width : '5%'}}>
                    <View>
                        <Text style={{fontSize : 15, fontWeight : 'bold'}}>{this.state.docSize}</Text>
                    </View>
                </View>            
            <View style={{justifyContent: 'center', alignItems : 'center', width : '5%'}}>
                <View>
                    <Text style={{fontSize : 15, fontWeight : 'bold'}}>{this.state.secureGrade}</Text>
                </View>
            </View>            
            <View style={{justifyContent: 'center', alignItems : 'center', width : '5%'}}>
                <View>
                    <Text style={{fontSize : 15, fontWeight : 'bold'}}>{this.state.preservePeriod}</Text>
                </View>
            </View>            
            <View style={{justifyContent: 'center', alignItems : 'center', width : '10%'}}>
                <View>
                    <Text style={{fontSize : 15, fontWeight : 'bold'}}>{this.state.processer}</Text>
                </View>
            </View>            

            <View style={{justifyContent: 'center', alignItems : 'center', width : '10%'}}>
                <View>
                    <Text style={{fontSize : 15, fontWeight : 'bold'}}>{this.state.productionOrg}</Text>
                </View>
            </View>            
            <View style={{justifyContent: 'center', alignItems : 'center', width : '7%'}}>
                <View>
                    <Text style={{fontSize : 15, fontWeight : 'bold'}}>{this.state.producer}</Text>
                </View>
            </View>            
            <View style={{justifyContent: 'center', alignItems : 'center', width : '10%'}}>
                <View>
                    <Text style={{fontSize : 15, fontWeight : 'bold'}}>{this.state.productionDate}</Text>
                </View>
            </View>            
        </View>
        )
    }
}