import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import ActionButton from 'react-native-action-button';
import Meteor, { createContainer, MeteorListView } from 'react-native-meteor';
import KeyboardSpacer from 'react-native-keyboard-spacer';

import { AddRoomModal } from './addRoomModal';

export default class Rooms extends Component {
  constructor() {
    super();
    Meteor.subscribe('rooms');
    this.state = {
      modalVisible: false
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <MeteorListView
          collection='rooms'
          enableEmptySections={true}
          renderRow={this.renderItem.bind(this)}
          renderHeader={this.renderHeader}
        />
        <Modal
          transparent={true}
          visible={this.state.modalVisible}
        >
          <TouchableWithoutFeedback onPress={() => this.setState({modalVisible: false})}>
            <View style={styles.containerBackground}>
              <AddRoomModal onClose={this.onAddRoom.bind(this)}/>
              <KeyboardSpacer/>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
        <ActionButton
          buttonColor="rgba(231,76,60,1)"
          onPress={this.onFABPress.bind(this)}/>
      </View>);
  }

  onAddRoom({title, description}) {
    Meteor.call('addRoom',  title, description);
    this.setState({modalVisible: false});
  }
  onFABPress() {
    this.setState({modalVisible: true})
  }

  renderHeader() {
    return <Text style={styles.header}>Rooms</Text>;
  }

  renderItem(room) {
    return (
      <TouchableOpacity onPress={this.selectRoom.bind(this, room)}>
        <View style={styles.row}>
          <Text style={styles.roomTitle}>{room.title}</Text>
          <Text>{room.description}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  
  selectRoom(room) {
    this.props.navigator.push({
      name: 'posts',
      passProps: {
        room: room
      }
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 20
  },
  header: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
  },
  roomTitle: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  row: {
    padding: 10,
    backgroundColor: '#F6F6F6',
  },
  button: {
    backgroundColor: 'green'
  },
  containerBackground: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
