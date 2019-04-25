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
import TransactionList from './screen/TransactionList'
import InsertDiagnosisInfo from "./screen/diagnosisInfo/InsertDiagnosisInfo";


export default class StackNavigator extends Component{
    render() {
        const Stacks = createStackNavigator({
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