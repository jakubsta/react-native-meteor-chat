import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage
} from 'react-native';
import Meteor from 'react-native-meteor';
import Button from 'apsl-react-native-button';

export default class Home extends Component {

  constructor() {
    super();
    this.state = {
      logged: !!Meteor.user()
    };
  }

  logout() {
    Meteor.logout(() => {
      this.setState({logged: false});
    });
  }

  userActions() {
    return this.state.logged ? (
    <View>
      <Text style={{fontWeight: 'bold'}}>
        Welcome {Meteor.user().username}
      </Text>
      <Button
        style={styles.button}
        textStyle={styles.buttonText}
        onPress={() => this.logout()}>
        Logout
      </Button>
      </View>
    ) : (
      <View>
        <Button
          style={styles.button}
          textStyle={styles.buttonText}
          onPress={() => this.props.navigator.push({name: 'login'})}>
          Login
        </Button>
        <Button
          style={styles.button}
          textStyle={styles.buttonText}
          onPress={() => this.props.navigator.push({name: 'signup'})}>
          Signup
        </Button>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.userActions()}
        <Button
          style={styles.button}
          textStyle={styles.buttonText}
          onPress={() => this.props.navigator.push({name: 'rooms'})}>
          Chat rooms
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
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: 'white'
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
  }
});
