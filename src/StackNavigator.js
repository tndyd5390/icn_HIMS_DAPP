import React, { Component } from 'react';
import {
    createBottomTabNavigator,
    createStackNavigator
} from 'react-navigation';
import Init from './screen/Init';
import Menu from './screen/Menu';
import Register from './screen/user/Register';
import Login from './screen/user/Login';
import InquiryHealthInfo from './screen/InquiryHealthInfo'
import SearchInfo from './screen/SearchInfo'
import TransactionList from './screen/TransactionList'
import InsertDiagnosisInfo from "./screen/insert/InsertDiagnosisInfo";
import InsertList from "./screen/insert/InsertList";
import ShareRequest from "./screen/share/ShareRequest";
import ShareSearch from "./screen/share/ShareSearch";
import ShareList from "./screen/share/ShareList";


export default class StackNavigator extends Component{
    render() {
        const Stacks = createStackNavigator({
            Init : {
                screen: Init, 
                navigationOptions: {
                    header: null
                }
            },
            Menu : {
                screen: Menu, 
                navigationOptions: {
                    header: null
                }
            },
            SearchInfo: {
                screen: SearchInfo,
                navigationOptions: {
                    title: "개인건강정보 조회",
                    headerTitleStyle: {
                        width: "85%",
                        textAlign: "center"
                    }
                }
            },
            ShareSearch: {
                screen: ShareSearch,
                navigationOptions: {
                    title: "공유기록 검색",
                    headerTitleStyle: {
                        width: "85%",
                        textAlign: "center"
                    }
                }
            },
            ShareList: {
                screen: ShareList,
                navigationOptions: {
                    title: "공유기록",
                    headerTitleStyle: {
                        width: "85%",
                        textAlign: "center"
                    }
                }
            },
            InquiryHealthInfo: {
                screen: InquiryHealthInfo,
                navigationOptions: {
                    title: "진료기록",
                    headerTitleStyle: {
                        width: "85%",
                        textAlign: "center"
                    }
                }
            },
            InsertList : {
                screen: InsertList,
                navigationOptions: {
                    title: "기록 생성",
                    headerTitleStyle: {
                        width: "85%",
                        textAlign: "center"
                    }
                }
            },
            ShareRequest: {
                screen: ShareRequest,
                navigationOptions: {
                    title: "의료정보공유 요청",
                    headerTitleStyle: {
                        width: "85%",
                        textAlign: "center"
                    }
                }
            },
            InsertDiagnosisInfo: {
                screen: InsertDiagnosisInfo,
                navigationOptions: {
                    title: "진료기록 생성",
                    headerTitleStyle: {
                        width: "85%",
                        textAlign: "center"
                    }
                }
            },
            Register : {
                screen: Register, 
                navigationOptions: {
                    header: null
                }
            },
            Login : {
                screen: Login,
                navigationOptions: {
                    header: null
                }
            },
            TransactionList: {
                screen: TransactionList,
                navigationOptions: {
                    header: null
                }
            }
        })

        return(
            <Stacks/>
        );
    };
}