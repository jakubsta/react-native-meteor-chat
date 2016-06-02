import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
} from 'react-native';
import ActionButton from 'react-native-action-button';
import Meteor, { createContainer, MeteorListView } from 'react-native-meteor';

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
      <View style={{flex:1}}>
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
          <View style={styles.container}>
            <View style={styles.innerContainer}>
              <Text>Hello</Text>
            </View>
          </View>
        </Modal>
        <ActionButton 
          buttonColor="rgba(231,76,60,1)"
          onPress={this.onFABPress.bind(this)}/>
      </View>);
  }
  
  onFABPress() {
    this.setState({modalVisible: !this.state.modalVisible})
    // Meteor.call('addRoom', 'new fab', 'new room created using fab');
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
  innerContainer: {
    backgroundColor: '#fff', 
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  }
});
