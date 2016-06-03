import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
import Meteor, { Accounts } from 'react-native-meteor';
import Login from './login';
import Signup from './signup';
import { Home } from './home';
import Rooms from './rooms';
import Posts from './posts';

Meteor.connect('ws://10.251.241.153:3000/websocket');

export class Chat extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{name: 'home'}}
        configureScene={this.configureScene}
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
      case 'rooms': 
        return <Rooms navigator={navigator}/>;
      case 'posts':
        return <Posts {...route.passProps}/>
    }
  }

  configureScene(route, routeStack) {
     return Navigator.SceneConfigs.PushFromRight 
  }
}

const styles = StyleSheet.create({
});
