import React from 'react';
import { View, Text } from 'react-native';
import Toolbar from '../../components/Toolbar';
import TasksList from '../../components/Tasks/TasksList';
import { getTasksByTaskListId } from '../../services/taskService';
import data from '../../resources/data.json';

class Tasks extends React.Component {
  state = {
    tasks: [],
    selectedTasks: [],
    taskListId: 0,
    taskListName: '',
  }

  async componentDidMount() {
    const { navigation } = this.props;
    const { taskListId, taskListName } = navigation.params;
  }

  onTaskLongPress(id) {
    const { selectedTasks } = this.state;
    if (selectedTasks.indexOf(id) !== -1) {
      this.setState({
        selectedTasks: selectedTasks.filter((task) => task !== id),
      });
    } else {
      this.setState({
        selectedTasks: [...selectedTasks, id],
      });
    }
  }

  render() {
    const { tasks, selectedTasks, taskListId } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Toolbar hasSelectedItems={selectedTasks.length > 0}
        onAdd={() => this.props.navigation.navigate('NewTask')}
        />
        <TasksList
          onLongPress={(id) => this.onTaskLongPress(id)}
          tasks={
            getTasksByTaskListId(this.props.navigation.state.params.taskListId)
          }
          selectedTasks={ selectedTasks }
        />
      </View>
    );
  }
}

export default Tasks;
