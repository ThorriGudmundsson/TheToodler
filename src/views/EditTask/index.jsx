import React from 'react';
import { View, Text, TouchableHighlight, TextInput, Picker, Switch } from 'react-native';
import data from '../../resources/data.json';
import { getTaskById } from '../../services/taskService';
import { getTaskListsByBoardId, getTaskListById } from '../../services/taskListService';
import styles from '../../styles/fields';

function onEdit(editValues, goback) {
  const parentIndex = data.lists.findIndex((task) => task.id === editValues.taskId);

  console.log(editValues);

  data.tasks[parentIndex] = {
    id: editValues.taskId,
    name: editValues.name,
    description: editValues.description,
    isFinished: editValues.isFinished,
    listId: editValues.parentTaskList.id,
  };

  goback.goBack();
}

class EditTask extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
      isFinished: false,
      parentTaskList: {},
      taskListsInBoard: [],
    };
  }

  componentDidMount() {
    const task = getTaskById(this.props.navigation.state.params.taskId);
    const taskList = getTaskListById(task.listId);
    const boardTaskLists = getTaskListsByBoardId(taskList.boardId);
    this.setState({
      name: task.name,
      description: task.description,
      isFinished: task.isFinished,
      parentListId: task.listId,
      taskId: task.id,
      parentTaskList: taskList,
      taskListsInBoard: boardTaskLists,
    });
  }

  onDone(isFinished) {
    this.setState({ isFinished });
  }

  updateTaskList(parentTaskList) {
    this.setState({ parentTaskList });
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
          placeholder="Describe the Task"
          value={this.state.description}
          onChangeText={(text) => this.genericInputHandler('description', text)}
        />

        <Text style={styles.helpText}>Pick list</Text>
        <Picker
          selectedValue={this.state.parentTaskList}
          onValueChange={(value) => this.updateTaskList(value)}
          backgroundColor="#d5e8e6"
        >
          {
            this.state.taskListsInBoard
              .map((taskList) => (
                <Picker.Item
                  label={taskList.name}
                  value={taskList}
                />
              ))
          }
        </Picker>

        <Text style={styles.isFinishedText}>{this.state.isFinished ? 'Done' : 'Not done'}</Text>
        <Switch
          onValueChange={(isFinished) => this.onDone(isFinished)}
          value={this.state.isFinished}
        />

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

export default EditTask;
