import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Button from 'react-native-button';


export class Home extends Component {
  render() {
    return (
      <View>
        <Text>Home</Text>
        <Button
          onPress={() => this.props.navigator.push({name: 'login'})}>
          Go to login
        </Button>
        <Button
          onPress={() => this.props.navigator.push({name: 'signup'})}>
          Go to signup
        </Button>
        <Button>
          Go to rooms 
        </Button>
      </View>
  );
  }
}

const styles = StyleSheet.create({
  input : {
    textAlign: 'center',
    width: 100,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  }
});
