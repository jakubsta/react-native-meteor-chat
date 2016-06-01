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

  test(a,b) {
    console.log(a,b);
  }

  _handlePress(event) {
    console.log('Pressed!');
  }

  render() {
    return (
      <View>
        <TextInput
        ref='1'
        placeholder='Login'
        blurOnSubmit={true}
        onSubmitEditing={() => this.test('2')}
        style={styles.input}
      />
      <TextInput
        password={true}
        style={styles.input}
      />
        <Button
          style={{fontSize: 20, color: 'green'}}
          styleDisabled={{color: 'red'}}
          onPress={this._handlePress}
        >
          Press Me!
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
  },
  button: {

  }
});
