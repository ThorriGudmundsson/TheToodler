import React from 'react';
import { View, Text } from 'react-native';
import Toolbar from '../../components/Toolbar';
import TaskList from '../../components/Tasks/TaskList';
import { getTaskListsByBoardId } from '../../services/taskListService';
import data from '../../resources/data.json';

class Board extends React.Component {
  state = {
    taskLists: [],
    selectedTaskLists: [],
    boardId: 0,
  }
 componentDidMount() {
    const { navigation } = this.props;
    const { boardId, boardName } = navigation.params;
    this.setState({
      taskLists: getTaskListsByBoardId(this.props.navigation.state.params.boardId)})
    console.log(this.state.taskLists)


  }

  onBoardLongPress(id) {
    const { selectedTaskLists } = this.state;
    if (selectedTaskLists.indexOf(id) !== -1) {
      this.setState({
        selectedTaskLists: selectedTaskLists.filter((taskList) => taskList !== id),
      });
    } else {
      this.setState({
        selectedTaskLists: [...selectedTaskLists, id],
      });
    }
  }

  removeTaskList() {
    // TODO needs to delete also tasks linked to setInterval(function () {
    // TODO handle stuff if all are deleted
    const { selectedTaskLists, taskLists } = this.state;
    console.log(this.state.selectedTaskLists)
    console.log(this.state.taskLists)
    // Removes Tasklists from list of lists if there ares some in selectedTaskLists
    if (selectedTaskLists.length > 0) {
      // inspect every selctect item
      const removeFromBoard = selectedTaskLists.filter((item) => {
        // loop through every selected item
        taskLists.forEach((obj, i) => {
          // compare with every list object
          if (obj.id === item) {
            // delete from board
            taskLists.splice(i, 1);
          }
        });
      });

      // clean up and refreach
      selectedTaskLists.splice(0, selectedTaskLists.length);
      this.setState({ taskLists });
    }
  }

  render() {
    const { taskLists, selectedTaskLists, boardId } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Toolbar hasSelectedItems={selectedTaskLists.length > 0}
        onAdd={() => this.props.navigation.navigate('NewTaskList')}
        onRemove={() => this.removeTaskList()}
        />
        <TaskList
          onLongPress={(id) => this.onBoardLongPress(id)}
          tasklists={
            getTaskListsByBoardId(this.props.navigation.state.params.boardId)
          }
          selectedTaskLists={ selectedTaskLists }

        />
      </View>
    );
  }
}

export default Board;
