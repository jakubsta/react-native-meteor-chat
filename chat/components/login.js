import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import { Accounts } from 'react-native-meteor';
import Button from 'react-native-button';

export class Login extends Component {

  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
  }

  logIn() {
    console.log('log in');
    console.log(this.state);
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder='Email'
          style={styles.input}
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
        />
        <TextInput
          placeholder='Password'
          password={true}
          style={styles.input}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />
        <Button
          style={styles.button}
          onPress={this.logIn.bind(this)}
        >
          Login
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
    margin: 20
  },
  input: {
    textAlign: 'center',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10
  },
  button: {
    fontSize: 20,
    color: 'white',
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'blue',
    height: 40,
    borderRadius: 5
  }
});
