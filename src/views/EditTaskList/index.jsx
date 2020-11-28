import React from 'react';
import {
  View, Text, TouchableHighlight, TextInput, Picker,
} from 'react-native';

import data from '../../resources/data.json';
import { getTaskListById } from '../../services/taskListService';
import styles from '../../styles/fields';

function onEdit(editValues, goback) {
  const parentIndex = data.lists.findIndex((taskList) => taskList.id === editValues.taskListId);

  data.lists[parentIndex] = {
    id: editValues.taskListId,
    name: editValues.name,
    color: editValues.color,
    boardId: editValues.parentBoardId,
  };

  goback.goBack();
}

class EditTaskList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      color: '',
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

  componentDidMount() {
    const taskList = getTaskListById(this.props.navigation.state.params.taskListId);
    this.setState({
      name: taskList.name,
      color: taskList.color,
      parentBoardId: taskList.boardId,
      taskListId: taskList.id,
    });
  }

  genericInputHandler(name, value) {
    this.setState({ [name]: value });
  }

  updateColor(color) {
    this.setState({ color });
  }

  render() {
    const { colors } = this.state;
    return (
      <View>
        <TextInput
          style={styles.inputfield}
          placeholder="Name the Task List"
          value={this.state.name}
          onChangeText={(text) => this.genericInputHandler('name', text)}
        />
        <Text style={styles.helpText}>pick color</Text>

        <Picker
          selectedValue={this.state.color}
          onValueChange={(value) => this.updateColor(value)}
          backgroundColor={this.state.color}
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
          onPress={() => onEdit(
            this.state,
            this.props.navigation,
          )}
          style={styles.saveButton}
        >
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default EditTaskList;
