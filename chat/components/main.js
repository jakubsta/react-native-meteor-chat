import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
import Meteor, { createContainer, Accounts } from 'react-native-meteor';
import { Login } from './login';
import { Home } from './home';


Meteor.connect('http://192.168.43.58:3000/websocket');

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
        return <Home navigator={navigator}/>;  
      case 'login':
        return <Login/>;
      case 'signup':
        return <View></View>;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
