import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Button from 'apsl-react-native-button';
import Meteor from 'react-native-meteor';

export default class PostAdder extends Component {
  constructor() {
    super();
    this.state = {
      message: ''
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          placeholder='Message'
          keyboardType='default'
          multiline={true}
          onChangeText={(message) => this.setState({message})}
          value={this.state.message}
          style={styles.input}/>
        <TouchableOpacity
          onPress={this.addPost.bind(this)}>
          <Image 
            style={styles.icon}
            source={require('../assets/send.png')}/>
        </TouchableOpacity>
      </View>
    );
  }

  addPost() {
    Meteor.call('addPost', this.props.roomId, this.state.message);
    this.setState({message: ''});
  }
}
const styles = StyleSheet.create({
  container: {
    flex: .15,
    flexDirection: 'row'
  },
  icon: {
    flex: .1,
    margin: 10,
    width: 35,
    resizeMode: 'contain',
  },
  input: {
    flex: .9,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 7,
    margin: 10,
    padding: 5
  }
});
