import React from 'react';
import {
  View, Text, TouchableHighlight, TextInput, Picker,
} from 'react-native';

import data from '../../resources/data.json';
import { getTaskListById } from '../../services/taskListService';
import styles from '../../styles/fields';

function onEdit(parentBoardId, editValues) {
  let defaultPhoto = 'https://5.imimg.com/data5/MC/OH/MY-15542396/green-school-board-500x500.jpg';

  if (editValues.thumbnailPhoto !== '') { defaultPhoto = editValues.thumbnailPhoto; }
  const parentIndex = data.boards.findIndex((board) => board.id === parentBoardId);

  data.boards[parentIndex] = {
    id: parentBoardId,
    name: editValues.name,
    color: editValues.color,
  };
}

class EditTaskList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      color: '',
      colors: [
        { label: 'White', value: "#ffffff"},
        { label: 'Green', value: "#00ff00"},
        { label: 'Light Grey', value: "#dddddd"},
        { label: 'Grey', value: "#cccccc"},
        { label: 'Dark Grey', value: "#555555"},
        { label: 'Red', value: "#ff0000"},
        { label: 'Blue', value: "#0000ff"},
        { label: 'Pink', value: "#ff00ff"},
      ]
    };
  }

  componentDidMount() {
    const taskList = getTaskListById(this.props.navigation.state.params.taskList);
    console.log(taskList);
    this.setState({
      name: taskList.name,
      color: taskList.color,
      parentBoardId: taskList.boardId,
    });
  }

  genericInputHandler(name, value) {
    this.setState({ [name]: value });
  }

  updateColor(color) {
    this.setState({ color });
  }

  render() {
    return (
      <View>
        <TextInput
          style={styles.inputfield}
          placeholder="Name the Task List"
          value={this.state.name}
          onChangeText={(text) => this.genericInputHandler('name', text)}
        />

        {/* <Picker
          selectedValue={this.state.color}
          onValueChange={(value) => this.updateColor(value)}
        >
          {
            data.lists
              .map((taskList) => (
                <Picker.Item label={taskList.color} value={taskList.value} />
              ))
          }
        </Picker> */}

        <TouchableHighlight
          onPress={() => onEdit(
            this.state.parentBoardId,
            this.state,
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
