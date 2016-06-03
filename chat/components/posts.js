import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
import Meteor, { MeteorListView } from 'react-native-meteor';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import Button from 'apsl-react-native-button';
import moment from 'momentjs';
import chroma from 'chroma-js';

import PostAdder from './postAdder';

export default class Posts extends Component {

  constructor() {
    super();
    this.authorColor = new Map();
  }

  componentWillMount() {
    Meteor.subscribe('posts', this.props.room._id);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:.85}}>
        <Text style={styles.roomTitle}>{this.props.room.title}</Text>
        <Text style={styles.roomDescription}>{this.props.room.description}</Text>
        <View style={styles.chatContainer}>
          <MeteorListView
            collection='posts'
            enableEmptySections={true}
            renderRow={this.renderItem.bind(this)}
            selector={{roomId: this.props.room._id}}
          />
        </View>
        </View>
        <PostAdder roomId={this.props.room._id}/>
        <KeyboardSpacer/>
      </View>);
  }

  getPostBackground(author) {
    let authorColor = this.authorColor.get(author);
    if (!authorColor) {
      authorColor = chroma.random().brighten().hex();
      this.authorColor.set(author, authorColor);
    }
    return { backgroundColor: authorColor, borderColor: authorColor };
  }

  renderItem(post) {
    const dateTime = moment(post.submitDate).format('hh:mm DD.MM.YYYY');
    return (
      <View style={[styles.postContainer, this.getPostBackground(post.author)]}>
          <Text style={styles.author}>{post.author}</Text>
          <Text style={styles.message}>{post.message}</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 20,
  },
  chatContainer: {
    flex: 1,
    margin: 10
  },
  postContainer: {
    margin: 2,
    marginBottom: 5,
    padding: 5,
    backgroundColor: '#f0f0f0',
    borderColor: '#f0f0f0',
    borderRadius: 20,
    borderWidth: 1,
    height: 50,
    borderRadius: 7,
  },
  author: {
    fontSize: 10,
  },
  message: {
    fontSize: 16,
    paddingLeft: 5
  },
  roomTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    backgroundColor: '#E0E0E0',
  },
  roomDescription: {
    backgroundColor: '#E0E0E0',
    padding: 10,
  }
});
