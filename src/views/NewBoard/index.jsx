import React from 'react';
import {
  View, Text, TouchableHighlight, TextInput, Image,
} from 'react-native';
import data from '../../resources/data.json';
import styles from '../../styles/fields';

// import ImportImages from '../Images';

function onAdd(somedata, nameField, descriptionField, photoURLField) {
  let nextId = 0; // in case that boards are emty
  const defaultPhoto = 'https://5.imimg.com/data5/MC/OH/MY-15542396/green-school-board-500x500.jpg';
  if (somedata.length > 0) {
    nextId = somedata[somedata.length - 1].id + 1;
  }
  if (nameField === '') {
    nameField = `My Board ( ${nextId} )`;
  }
  if (photoURLField === '') {
    photoURLField = defaultPhoto;
  }

  somedata.push({
    id: nextId,
    name: nameField,
    thumbnailPhoto: photoURLField,
    description: descriptionField,
  });
}

class NewBoard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
      photoURL: '',
    };
  }

  genericInputHandler(name, value) {
    this.setState({ [name]: value });
  }

  render() {
    return (
      <View>
        <TextInput
          style={styles.inputfield}
          placeholder="Name the board"
          value={this.state.name}
          onChangeText={(text) => this.genericInputHandler('name', text)}
        />

        <TextInput
          style={styles.inputfield}
          placeholder="Add description"
          value={this.state.description}
          secureTestEntry
          onChangeText={(text) => this.genericInputHandler('description', text)}
        />

        <TextInput
          style={styles.inputfield}
          placeholder="http... (paste in photo url) or leave blank for default"
          value={this.state.photoURL}
          secureTestEntry
          onChangeText={(text) => this.genericInputHandler('photoURL', text)}
        />

        <TouchableHighlight
          onPress={() => onAdd(data.boards, this.state.name, this.state.description, this.state.photoURL)}
          style={styles.saveButton}
        >
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableHighlight>

      </View>
    );
  }
}

export default NewBoard;
