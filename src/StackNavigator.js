import React, { Component } from 'react';
import {
    createBottomTabNavigator,
    createStackNavigator
} from 'react-navigation';
import Init from './screen/Init';
import InquiryHealthInfo from './screen/InquiryHealthInfo'



export default class StackNavigator extends Component{
    render() {

        const Stacks = createStackNavigator({
            Init : {
                screen: Init, 
                navigationOptions: {
                    header: null
                }
            },
            InquiryHealthInfo: {
                screen: InquiryHealthInfo,
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