import React from 'react';
import { View, Text } from 'react-native';
import Toolbar from '../../components/Toolbar';
import BoardList from '../../components/Boards/BoardList';
import { NavigationEvents } from 'react-navigation';
import data from '../../resources/data.json';

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      boards: data.boards,
      selectedBoards: [],
    };
  }


  onBoardLongPress(id) {
    const { selectedBoards } = this.state;
    if (selectedBoards.indexOf(id) !== -1) {
      this.setState({
        selectedBoards: selectedBoards.filter((board) => board !== id),
      });
    } else {
      this.setState({
        selectedBoards: [...selectedBoards, id],
      });
    }
  }

  render() {
    const { selectedBoards, boards } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <NavigationEvents
          // TODO maybe need to do some if test here
          onWillFocus={payload => this.setState({ boards })}

        />
        <Toolbar
          hasSelectedItems={selectedBoards.length > 0}
          onAdd={() => this.props.navigation.navigate('NewBoard')}
          onRemove={() => {}}
          onEdit={() => {}}
        />
        <BoardList
          onLongPress={(id) => this.onBoardLongPress(id)}
          boards={boards}
          selectedBoards={selectedBoards}
        />

      </View>
    );
  }
}

export default Board;
