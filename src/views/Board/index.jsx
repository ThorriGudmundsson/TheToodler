import React from 'react';
import { View, Text } from 'react-native';
import Toolbar from '../../components/Toolbar';
import TaskList from '../../components/Tasks/TaskList';
import { getTaskListsByBoardId } from '../../services/taskListService';
import data from '../../resources/data.json';

class Board extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      taskLists: [],
      selectedTaskLists: [],
      boardId: 0,
    };
  }

  componentDidMount() {
    // console.log(this.props.navigation.params);

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

  render() {
    const { tasklists, selectedTaskLists, boardId } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Toolbar hasSelectedItems={selectedTaskLists}
        onAdd={() => this.props.navigation.navigate('NewTaskList')}
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
