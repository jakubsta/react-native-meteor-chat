import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import Meteor, { MeteorListView } from 'react-native-meteor';
import Button from 'apsl-react-native-button';

export default class Posts extends Component {
  componentWillMount() {
    Meteor.subscribe('posts', this.props.room._id);
  }

  render() {
    return (
      <View>
        <Text>{this.props.room.title}</Text>
        <Text>{this.props.room.description}</Text>
          <MeteorListView
            collection='posts'
            selector={{roomId: this.props.room._id}}
            enableEmptySections={true}
            renderRow={this.renderItem.bind(this)}
          />
      </View>);
  }

  renderItem(post) {
        // <Text>{post.submitDate}</Text>
    return (
      <View>
        <Text>{post.message}</Text>
        <Text>{post.author}</Text>
      </View>
    );
  }
}
