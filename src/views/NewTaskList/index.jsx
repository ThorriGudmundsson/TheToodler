import React from 'react';
import {
  View, Text, TouchableHighlight, TextInput, Picker
} from 'react-native';
import data from '../../resources/data.json';
import styles from '../../styles/fields';
import colorPickStyles from './styles';

function onAdd(somedata, nameField, colorPick, boardIdF) {
  let nameF = nameField;
  let nextId = 0; // in case that list is emty

  if (somedata.length > 0) {
    nextId = somedata[somedata.length - 1].id + 1;
  }
  if (nameF === '') {
    nameF = `My Task List ( ${nextId} )`;
  }

  somedata.push({
    boardId: boardIdF,
    id: nextId,
    name: nameF,
    color: colorPick,
  });
}


class NewTaskList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      colorPick: '#ff00ff',
      boardId: this.props.navigation.state.params.boardId,
      colors: [
        { label: 'White', value: '#ffffff' },
        { label: 'Green', value: '#00ff00' },
        { label: 'Light Grey', value: '#dddddd' },
        { label: 'Grey', value: '#cccccc' },
        { label: 'Dark Grey', value: '#555555' },
        { label: 'Red', value: '#ff0000' },
        { label: 'Blue', value: '#0000ff' },
        { label: 'Pink', value: '#ff00ff' },
      ],

    };
  }

  genericInputHandler(name, value) {
    this.setState({ [name]: value });
  }

  updateColor(colorPick) {
    this.setState({ colorPick });
  }

  render() {
    const { name, colorPick, boardId, colors } = this.state;

    return (
      <View>
        <TextInput
          style={styles.inputfield}
          placeholder="Task List Title"
          value={name}
          onChangeText={(text) => this.genericInputHandler('name', text)}
        />
        <Text style={styles.helpText}>pick color</Text>

        <Picker
          selectedValue={colorPick}
          onValueChange={(value) => this.updateColor(value)}
          backgroundColor={colorPick}
        >
          {
            colors
              .map((taskList) => (

                <Picker.Item
                  label={taskList.label}
                  value={taskList.value}
                />
              ))
          }
        </Picker>

        <TouchableHighlight
          onPress={() => onAdd(data.lists, name, colorPick, boardId)}
          style={styles.saveButton}
        >
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableHighlight>

      </View>
    );
  }
}

export default NewTaskList;
