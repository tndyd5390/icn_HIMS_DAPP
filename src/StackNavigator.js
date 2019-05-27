import React, { Component } from 'react';
import {
    createBottomTabNavigator,
    createStackNavigator
} from 'react-navigation';
import Init from './screen/Init';
import Menu from './screen/Menu';
import Register from './screen/user/Register';
import Login from './screen/user/Login';
import DocuList from './screen/elecdocu/DocuList';
import ReadyList from './screen/elecdocu/ReadyList';
import HistoryList from './screen/elecdocu/HistoryList';
import CompleteList from './screen/elecdocu/CompleteList';
import InsertDocu from './screen/elecdocu/InsertDocu';

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
            DocuList: {
                screen: DocuList,
                navigationOptions: {
                    title: "디지털기록문서 생산현황",
                    headerTitleStyle: {
                        width: "85%",
                        textAlign: "center"
                    }
                }
            },
            ReadyList: {
                screen: ReadyList,
                navigationOptions: {
                    title: "이관준비목록 열람",
                    headerTitleStyle: {
                        width: "85%",
                        textAlign: "center"
                    }
                }
            },
            HistoryList: {
                screen: HistoryList,
                navigationOptions: {
                    title: "처리이력 조회",
                    headerTitleStyle: {
                        width: "85%",
                        textAlign: "center"
                    }
                }
            },
            CompleteList: {
                screen: CompleteList,
                navigationOptions: {
                    title: "디지털기록문서 인수 목록",
                    headerTitleStyle: {
                        width: "85%",
                        textAlign: "center"
                    }
                }
            },
            InsertDocu: {
                screen: InsertDocu,
                navigationOptions: {
                    title: "디지털기록문서 생성",
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
        })

        return(
            <Stacks/>
        );
    };
}