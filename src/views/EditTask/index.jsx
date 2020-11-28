import React from 'react';
import { View, Text, TouchableHighlight, TextInput, Picker } from 'react-native';
import data from '../../resources/data.json';
import { getTasksByTaskListId } from '../../services/taskService';
import styles from '../../styles/fields';

function onEdit(editValues) {
  const parentIndex = data.lists.findIndex((task) => task.id === editValues.taskId);

  console.log(parentIndex);
  console.log(data.tasks[parentIndex]);

  data.tasks[parentIndex] = {
    id: editValues.taskId,
    name: editValues.name,
    description: editValues.description,
    isFinished: editValues.isFinished,
    listId: editValues.parentListId,
  };
  console.log(data.tasks[parentIndex]);
}

class EditTask extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
      isFinished: false,
    };
  }

  componentDidMount() {
    const task = getTasksByTaskListId(this.props.navigation.state.params.taskId);
    this.setState({
      name: task.name,
      description: task.description,
      parentListId: task.listId,
      taskId: task.id,
    });
  }

  genericInputHandler(name, value) {
    this.setState({ [name]: value });
  }

  render() {
    return (
      <View>
        <TextInput
          style={styles.inputfield}
          placeholder="Name the Task"
          value={this.state.name}
          onChangeText={(text) => this.genericInputHandler('name', text)}
        />
        <TextInput
          style={styles.inputfield}
          placeholder="Descripe the Task"
          value={this.state.description}
          onChangeText={(text) => this.genericInputHandler('description', text)}
        />

        <TouchableHighlight
          onPress={() => onEdit(
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

export default EditTask;
