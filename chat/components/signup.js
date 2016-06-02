import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import { Accounts } from 'react-native-meteor';
import Button from 'react-native-button';

export class Signup extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
      password: ''
    }
  }

  createAccount() {
    console.log(this.state);
    Accounts.createUser(Object.assign({}, this.state), (error, a) => {
      console.log(error, a);
      this.props.navigator.push({
        name: 'login',
        passProps: {
          status: 'success',
          message: 'Account created!',
          ...this.state
        }
      });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder='Email'
          keyboardType='email-address'
          style={styles.input}
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
        />
        <TextInput
          placeholder='Username'
          style={styles.input}
          onChangeText={(username) => this.setState({username})}
          value={this.state.username}
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
          onPress={this.createAccount.bind(this)}
        >
          Singup
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
    margin: 20,
    backgroundColor: 'white'
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
