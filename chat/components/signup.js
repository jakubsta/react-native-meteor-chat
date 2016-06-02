import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import Meteor, { Accounts } from 'react-native-meteor';
import Button from 'react-native-button';
import ReactTimeout from 'react-timeout';

class Signup extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
      password: '',
      message: null,
      status: null
    }
  }

  createAccount() {
    Accounts.createUser(Object.assign({}, this.state), (error) => {
      console.log(error);
      if (error) {
        return this.setState({status: 'error', message: error.reason});
      }
      Meteor.loginWithPassword({email: this.state.email}, this.state.password, (error) => {
        console.log(error);
        if (error) {
          return this.setState({status: 'error', message: error.reason});
        }
        this.props.navigator.push({
          name: 'home',
          passProps: {
            status: 'success',
            message: 'Account created!',
            ...this.state
          }
        });
      });
    });
  }

  clearMessage() {
    this.setState({status: null, message: null});
  }

  showMessage() {
    if (this.state.message) {
      this.props.setTimeout(this.clearMessage.bind(this), 3000);
    }
    return !this.state.message ? null : (
      <View style={styles.message}>
        <Text style={styles.messageText}>{this.state.message}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.showMessage.apply(this)}
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

export default ReactTimeout(Signup);

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
  },
  message: {
    backgroundColor: '#E0E0E0',
    height: 60,
    padding: 5,
    margin: 10,
    borderRadius: 10
  },
  messageText: {
    textAlign: 'center',
    marginTop: 10
  }
});
