import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import { Accounts } from 'react-native-meteor';

export class Login extends Component {

  test(a,b) {
    console.log(a,b);
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
