import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import Button from 'apsl-react-native-button';

export class AddRoomModal extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      description: ''
    };
  }

  render() {
    return (
      <TouchableWithoutFeedback>
        <View style={styles.modalContainer}>
          <TextInput
            placeholder='Title'
            keyboardType='default'
            style={styles.input}
            onChangeText={(title) => this.setState({title})}
            value={this.state.title}
          />
          <TextInput
            placeholder='Description'
            keyboardType='default'
            style={styles.input}
            onChangeText={(description) => this.setState({description})}
            value={this.state.description}
          />
          <Button
            style={styles.button}
            textStyle={styles.buttonText}
            onPress={() => this.props.onClose(this.state)}
          >
          Create
          </Button>
        </View>
      </TouchableWithoutFeedback>);
  }

  static propTypes = {
    onClose: React.PropTypes.func.isRequired
  }
}

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: '#fff', 
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  input: {
    textAlign: 'center',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    borderRadius: 7
  },
  button: {
    borderWidth: 1,
    borderColor: '#2980b9',
    backgroundColor: '#3498db',
    height: 40,
    margin: 10,
    padding: 10
  },
  buttonText: {
    color: 'white'
  },
}); 
