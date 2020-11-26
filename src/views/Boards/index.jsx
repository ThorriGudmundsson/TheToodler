import React from 'react';
import { View } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import Toolbar from '../../components/Toolbar';
import BoardList from '../../components/Boards/BoardList';
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

  removeBoard() {
    // TODO needs to delete also list and tasks linked to setInterval(function () {
    // TODO handle stuff if all are deleted
    const { selectedBoards, boards } = this.state;
    // Removes Boards from list of boards if there ares some in selectedBoards
    if (selectedBoards.length > 0) {
      // inspect evrey selctect item
      const removeFromBoards = selectedBoards.filter((item) => {
        // loop throu evrey selctect item
        boards.forEach((obj, i) => {
          // compare with every board object
          if (obj.id === item) {
            // delete from board
            boards.splice(i, 1);
          }
        });
      });

      // clean up and refreach
      selectedBoards.splice(0, selectedBoards.length);
      this.setState({ boards });
    }
  }

  render() {
    const { selectedBoards, boards } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <NavigationEvents
          // TODO maybe need to do some if test here
          onWillFocus={(payload) => this.setState({ boards })}

        />
        <Toolbar
          hasSelectedItems={selectedBoards.length > 0}
          onAdd={() => this.props.navigation.navigate('NewBoard')}
          onRemove={() => this.removeBoard()}
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
