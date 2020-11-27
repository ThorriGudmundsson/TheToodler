import React from 'react';
import { View, Text } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import Toolbar from '../../components/Toolbar';
import TaskList from '../../components/Tasks/TaskList';
import { getTaskListsByBoardId } from '../../services/taskListService';
import data from '../../resources/data.json';


class Board extends React.Component {
  state = {
    taskLists: data.lists,
    selectedTaskLists: [],
    boardId: 0,
  }
  async componentDidMount() {
    const { navigation } = this.props;
    const { boardId, boardName } = navigation.params;
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

  removeList() {
    console.log("hello from function")
    // TODO needs to delete also list and tasks linked to setInterval(function () {
    // TODO handle stuff if all are deleted
    const { selectedTaskLists, taskLists } = this.state;
    console.log(taskLists)

    // Removes taskLists from list of taskLists if there ares some in selectedTaskLists
    if (selectedTaskLists.length > 0) {
      // inspect evrey selctect item
      const removeFromtaskLists = selectedTaskLists.filter((item) => {
        // loop throu evrey selctect item
        taskLists.forEach((obj, i) => {
          // compare with every board object
          if (obj.id === item) {
            // delete from board
            taskLists.splice(i, 1);
          }
        });
      });
      selectedTaskLists.splice(0, selectedTaskLists.length);
      this.setState({ taskLists });
    }
  }

  render() {
    const { taskLists, selectedTaskLists, boardId } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <NavigationEvents
        // TODO maybe need to do some if test here
        onWillFocus={(payload) => this.setState({ boardId })}

      />
        <Toolbar hasSelectedItems={selectedTaskLists.length > 0}
        onAdd={() => this.props.navigation.navigate('NewTaskList')}
        onRemove={() => this.removeList()}
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
