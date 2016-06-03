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
      <View style={{flex:1, backgroundColor: 'white'}}>
        <MeteorListView
          collection='rooms'
          enableEmptySections={true}
          renderRow={this.renderItem}
          renderHeader={this.renderHeader}
        />
        <Modal
          transparent={true}
          visible={this.state.modalVisible}
        >
          <TouchableWithoutFeedback onPress={() => this.setState({modalVisible: false})}>
            <View style={styles.container}>
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

  renderItem(item) {
    return (
      <TouchableOpacity onPress={this._onPressButton}>
        <View style={styles.row}>
          <Text style={styles.roomTitle}>{item.title}</Text>
          <Text>{item.description}</Text>
        </View>
      </TouchableOpacity>
    ); 
  }
}

const styles = StyleSheet.create({
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
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
