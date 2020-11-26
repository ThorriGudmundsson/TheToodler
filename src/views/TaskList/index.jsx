import React from 'react';
import { View, Text } from 'react-native';
import Toolbar from '../../components/Toolbar';
import TaskList from '../../components/Tasks/TaskList';
import { getTasksByTaskListId } from '../../services/taskListService';
import data from '../../resources/data.json';

class TaskList extends React.Component {
  state = {
    taskLists: [],
    selectedTaskLists: [],
    boardId: 0,
    boardName: '',
  }
  async componentDidMount() {
    const { navigation } = this.props;
    const { boardId, boardName } = navigation.params;
  }

  render() {
    const { tasklists, selectedTaskLists, boardId } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Toolbar hasSelectedItems={selectedTaskLists.length > 0}
        onAdd={() => this.props.navigation.navigate('NewTaskList')}
        />
        <TaskList
          onLongPress={(id) => this.onBoardLongPress(id)}
          tasklists={
            getTaskListsByBoardId(this.props.navigation.state.params.boardId)
          }
          selectedTaskLists={ selectedTaskLists }
        />
        <Text>{this.props.navigation.state.params.boardId}</Text>
      </View>
    );
  }
}

export default TaskList;
