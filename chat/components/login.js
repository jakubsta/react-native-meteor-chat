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

class Login extends Component {

  componentWillMount() {
    console.log('props');
    this.setState(this.props);
  }

  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      message: null,
      status: null
    }
  }

  logIn() {
    console.log('log in');
    Meteor.loginWithPassword({email: this.state.email}, this.state.password, (error) => {
      console.log(error);
      if (error) {
        this.setState({status: 'error', message: error.reason});
      }
    });
  }

  clearMessage() {
    this.setState({status: null, message: null});
  }

  showMessage() {
    if (this.state.message) {
      console.log(this.state.message);
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

export default ReactTimeout(Login);

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
    borderRadius: 10

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
