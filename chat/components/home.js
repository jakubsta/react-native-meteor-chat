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
      <View style={styles.container}>
        <Text>Home</Text>
        <Button
          style={styles.button}
          onPress={() => this.props.navigator.push({name: 'login'})}>
          Go to login
        </Button>
        <Button
          style={styles.button}
          onPress={() => this.props.navigator.push({name: 'signup'})}>
          Go to signup
        </Button>
        <Button style={styles.button}>
          Go to rooms 
        </Button>
      </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    margin: 50
  },
  button: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#ddd',
    height: 40,
    margin: 10,
    padding: 10
  }
});
