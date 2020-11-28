import React from 'react';
import {
  View, Text, TouchableHighlight, TextInput,
} from 'react-native';
import data from '../../resources/data.json';
import styles from '../../styles/fields';


function onAdd(somedata, nameField, descriptionField, isfinishedF, listIdF, goback) {
  let nameF = nameField;
  console.log(descriptionField);
  let nextId = 0; // in case that Tasks are emty

  if (somedata.length > 0) {
    nextId = somedata[somedata.length - 1].id + 1;
  }
  if (nameF === '') {
    nameF = `My Task ( ${nextId} )`;
  }

  somedata.push({
    listId: listIdF,
    id: nextId,
    name: nameF,
    description: descriptionField,
    isFinished: isfinishedF,
  });

  goback.goBack();
}

class NewTask extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
      isFinished: false,
      listId: this.props.navigation.state.params.taskListId,

    };
  }

  genericInputHandler(name, value) {
    this.setState({ [name]: value });
  }

  render() {
    const {
      name, description, listId, isFinished,
    } = this.state;
    console.log(data.tasks);

    return (
      <View>
        <TextInput
          style={styles.inputfield}
          placeholder="Task Title"
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
        <TouchableHighlight
          onPress={() => onAdd(data.tasks, name, description, isFinished, listId, this.props.navigation,)}
          style={styles.saveButton}
        >
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableHighlight>

      </View>
    );
  }
}
// this.props.navigation.state.params.taskListId
export default NewTask;
