import React, { Component } from 'react';
import { IP } from "../constant";
import {
    View,
    Text,
    TouchableOpacity,
    FlatList
} from 'react-native';

class UserItem extends Component {
    _onPress = () => {
        this.props.onPressItem(this.props.key);
    }
    render() {
        return(
            <TouchableOpacity onPress={this._onPress}>
                <View>
                    <Text style={{color: textColor}}>{this.props.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

export default class InquiryHealthInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userList : []
        }
    }
    _keyExtractor = (item, index) => item.id;

    _onPressItem = (id) => {
        // updater functions are preferred for transactional updates
        this.setState((state) => {
          // copy the map rather than modifying state.
          const selected = new Map(state.selected);
          selected.set(id, !selected.get(id)); // toggle
          return {selected};
        });
      };
    

    _getUserList = () => {
        fetch(IP + "/getAllUsers", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })
        .then((response) => response.json())
        .then((res) => {
            this.setState({userList: res});
        })
    }

    _renderItem = ({item}) => (
        <UserItem
          id={item.key}
          onPressItem={this._onPressItem}
          selected={!!this.state.selected.get(item.id)}
          title={item.title}
        />
      );

    render() {
        setInterval(
            this._getUserList, 2000
        )
        
        return(
            <FlatList
                data={this.props.data}
                extraData={this.state}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
            />
        )
    }
}