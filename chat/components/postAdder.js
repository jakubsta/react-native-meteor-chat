import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import Button from 'apsl-react-native-button';

export default class PostAdder extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>View</Text>
        <TextInput/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: .15
  },
});
