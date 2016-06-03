import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
import Meteor, { Accounts } from 'react-native-meteor';
import Button from 'apsl-react-native-button';
import ReactTimeout from 'react-timeout';
import KeyboardSpacer from 'react-native-keyboard-spacer';

class Login extends Component {
  componentWillMount() {
    this.setState(this.props);
  }

  componentDidMount() {
    if (this.props.email && this.props.password) {
      this.logIn();
    }
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
    Meteor.loginWithPassword({email: this.state.email}, this.state.password, (error) => {
      if (error) {
        return this.setState({status: 'error', message: error.reason});
      }
      this.props.navigator.push({name: 'home'});
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
          placeholder='Password'
          password={true}
          style={styles.input}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />
        <Button
          style={styles.button}
          textStyle={styles.buttonText}
          onPress={this.logIn.bind(this)}
        >
          Login
        </Button>
        <KeyboardSpacer/>
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
    margin: 10,
    borderRadius: 7
  },
  button: {
    borderWidth: 1,
    borderColor: '#2980b9',
    backgroundColor: '#3498db',
    height: 40,
    margin: 10,
    padding: 10
  },
  buttonText: {
    color: 'white'
  },
  message: {
    backgroundColor: '#E0E0E0',
    height: 60,
    padding: 5,
    margin: 10,
    borderRadius: 7
  },
  messageText: {
    textAlign: 'center',
    marginTop: 10
  }
});
