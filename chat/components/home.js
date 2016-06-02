import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage
} from 'react-native';
import Meteor from 'react-native-meteor';
import Button from 'react-native-button';


export class Home extends Component {

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
        onPress={() => this.logout()}>
        Logout
      </Button>
      </View>
    ) : (
      <View>
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
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.userActions()}
        <Button
          style={styles.button}
          onPress={() => this.props.navigator.push({name: 'rooms'})}>
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
