import React from 'react';
import {
  View, Text, TouchableHighlight, TextInput,
} from 'react-native';

import data from '../../resources/data.json';
import { getBoardById } from '../../services/boardService';
import styles from '../../styles/fields';

function onEdit(parentBoardId, editValues) {
  let defaultPhoto = 'https://5.imimg.com/data5/MC/OH/MY-15542396/green-school-board-500x500.jpg';

  if (editValues.thumbnailPhoto !== '') { defaultPhoto = editValues.thumbnailPhoto; }
  const parentIndex = data.boards.findIndex((board) => board.id === parentBoardId);

  data.boards[parentIndex] = {
    id: parentBoardId,
    name: editValues.name,
    thumbnailPhoto: defaultPhoto,
    description: editValues.description,
  };
}

class EditBoard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
      thumbnailPhoto: '',
    };
  }

  componentDidMount() {
    const parentBoard = getBoardById(this.props.navigation.state.params.board);
    this.setState({
      name: parentBoard.name,
      description: parentBoard.description,
      thumbnailPhoto: parentBoard.thumbnailPhoto,
      parentBoardId: parentBoard.id,
    });
  }

  genericInputHandler(name, value) {
    this.setState({ [name]: value });
  }

  render() {
    return (
      <View>
        <TextInput
          style={styles.inputfield}
          placeholder="Name the board"
          value={this.state.name}
          onChangeText={(text) => this.genericInputHandler('name', text)}
        />

        <TextInput
          style={styles.inputfield}
          placeholder="Add description"
          value={this.state.description}
          secureTestEntry
          onChangeText={(text) => this.genericInputHandler('description', text)}
        />

        <TextInput
          style={styles.inputfield}
          placeholder="http... (paste in photo url) or leave blank for default"
          value={this.state.thumbnailPhoto}
          secureTestEntry
          onChangeText={(text) => this.genericInputHandler('thumbnailPhoto', text)}
        />

        <TouchableHighlight
          onPress={() => onEdit(
            this.state.parentBoardId,
            this.state,
          )}
          style={styles.saveButton}
        >
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableHighlight>

      </View>
    );
  }
}

export default EditBoard;
