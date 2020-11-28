import React from 'react';
import { View, Text } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import Toolbar from '../../components/Toolbar';
import TasksList from '../../components/Tasks/TasksList';
import { getTasksByTaskListId } from '../../services/taskService';
import data from '../../resources/data.json';

class Tasks extends React.Component {
  state = {
    tasks: data.tasks,
    selectedTasks: [],
    taskListId: this.props.navigation.state.params.taskListId,
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

  removeTask() {

    const { selectedTasks, tasks } = this.state;
    // Removes tasks from list of tasks if there ares some in selectedTasks
    if (selectedTasks.length > 0) {
      // inspect evrey selctect item
      const removeFromtasks = selectedTasks.filter((item) => {
        // loop throu evrey selctect item
        tasks.forEach((obj, i) => {
          // compare with every board object
          if (obj.id === item) {
            // delete from board
            tasks.splice(i, 1);
          }
        });
      });
      selectedTasks.splice(0, selectedTasks.length);
      this.setState({ tasks });
    }
  }

  render() {
    const { tasks, selectedTasks, taskListId } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <NavigationEvents
        // TODO maybe need to do some if test here
        onWillFocus={(payload) => this.setState({ taskListId })}

        />
        <Toolbar hasSelectedItems={selectedTasks}
        onAdd={() => this.props.navigation.navigate('NewTask', { taskListId })}
        onRemove={() => this.removeTask()}
        onEdit={() => this.props.navigation.navigate('EditTask', { taskId: selectedTasks[0], taskListId: taskListId })}
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
