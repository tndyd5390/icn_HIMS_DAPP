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
                    title: "디지털기록문서 열람",
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