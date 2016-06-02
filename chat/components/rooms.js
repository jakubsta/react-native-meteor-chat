import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Icon,
  View,
  TouchableOpacity,
} from 'react-native';
import ActionButton from 'react-native-action-button';
import Meteor, { createContainer, MeteorListView } from 'react-native-meteor';

export default class Rooms extends Component {
  constructor() {
    super();
    Meteor.subscribe('rooms');
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
        <ActionButton 
          buttonColor="rgba(231,76,60,1)"
          onPress={this.onFABPress}/>
      </View>);
  }
  
  onFABPress() {
    Meteor.call('addRoom', 'new fab', 'new room created using fab');
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
    // textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
  },
  row: {
    // flexDirection: 'row',
    // justifyContent: 'center',
    padding: 10,
    backgroundColor: '#F6F6F6',
  },
  button: {
    backgroundColor: 'green'
  }
});
