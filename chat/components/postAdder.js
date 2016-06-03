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
    width: 50,
    margin: 10,
    resizeMode: 'contain',
  },
  input: {
    flex: .9,
    textAlign: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    borderRadius: 10,
  }
});
