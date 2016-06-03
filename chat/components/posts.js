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
import moment from 'momentjs';

import PostAdder from './postAdder';

export default class Posts extends Component {
  componentWillMount() {
    Meteor.subscribe('posts', this.props.room._id);
  }

  render() {
    return (
      <View style={{flex:1}}>
        <View style={{flex:.85}}>
          <Text>{this.props.room.title}</Text>
          <Text>{this.props.room.description}</Text>
          <MeteorListView
            collection='posts'
            enableEmptySections={true}
            renderRow={this.renderItem.bind(this)}
            selector={{roomId: this.props.room._id}}
          />
        </View>
        <PostAdder roomId={this.props.room._id}/>
      </View>);
  }

  renderItem(post) {
    const dateTime = moment(post.submitDate).format('hh:mm DD.MM.YYYY');
    return (
      <View>
        <Text>{post.message}</Text>
        <Text>{post.author}</Text>
        <Text>{dateTime}</Text>
      </View>
    );
  }
}
