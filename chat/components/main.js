import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
import Meteor, { createContainer, Accounts } from 'react-native-meteor';
import Login from './login';
import { Signup } from './signup';
import { Home } from './home';


Meteor.connect('http://192.168.1.68:3000/websocket');

export class Chat extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{name: 'home'}}
        renderScene={this.renderScene}/>
    );
  }

  renderScene(route, navigator) {
    switch(route.name) {
      case 'home':
        return <Home navigator={navigator} {...route.passProps}/>;
      case 'login':
        return <Login navigator={navigator} {...route.passProps}/>;
      case 'signup':
        return <Signup navigator={navigator} {...route.passProps}/>;
    }
  }
}

const styles = StyleSheet.create({
});
