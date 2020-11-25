import React from 'react';
import { View } from 'react-native';
import Toolbar from '../../components/Toolbar';
import TaskList from '../../components/Tasks/TaskList';
import data from '../../resources/data.json';

class Boards extends React.Component {
  async componentDidMount() {
    const { navigation } = this.props;
    const
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Toolbar />
        <BoardList
          onLongPress={(id) => this.onImageLongPress(id)}
          boards={data.boards}
        />
      </View>
    );
  }
}

export default Boards;
