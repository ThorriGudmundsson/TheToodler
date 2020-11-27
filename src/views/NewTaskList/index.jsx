import React from 'react';
import {
  View, Text, TouchableHighlight, TextInput,
} from 'react-native';
import data from '../../resources/data.json';
import styles from '../../styles/fields';
import colorPickStyles from './styles';

function onAdd(somedata, nameField, colorPick, boardIdF) {
  let nameF = nameField;
  let nextId = 0; // in case that list is emty

  if (somedata.length > 0) {
    nextId = somedata[somedata.length - 1].id + 1;
  }
  if (nameF === '') {
    nameF = `My Task List ( ${nextId} )`;
  }

  somedata.push({
    boardId: boardIdF,
    id: nextId,
    name: nameF,
    color: colorPick,
  });
}


class NewTaskList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      colorPick: '#ffffff',
      boardId: this.props.navigation.state.params.boardId,

    };
  }

  genericInputHandler(name, value) {
    this.setState({ [name]: value });
  }

  render() {
    const { name, colorPick, boardId } = this.state;


    return (
      <View>
        <TextInput
          style={styles.inputfield}
          placeholder="Task List Title"
          value={this.state.name}
          onChangeText={(text) => this.genericInputHandler('name', text)}
        />
        <Text style={colorPickStyles.helpText}>pick color</Text>

        <TouchableHighlight
          onPress={() => this.genericInputHandler('colorPick', '#ffffff')}
          style={colorPickStyles.cwhite}
        >
          <Text />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => this.genericInputHandler('colorPick', '#555555')}
          style={colorPickStyles.cdark}
        >
          <Text />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => this.genericInputHandler('colorPick', '#ebb734')}
          style={colorPickStyles.cyello}
        >
          <Text />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => this.genericInputHandler('colorPick', '#ff0000')}
          style={colorPickStyles.cred}
        >
          <Text />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => this.genericInputHandler('colorPick', '#00ff00')}
          style={colorPickStyles.cgreen}
        >
          <Text />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => this.genericInputHandler('colorPick', '#0000ff')}
          style={colorPickStyles.cblue}
        >
          <Text />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => this.genericInputHandler('colorPick', '#ff00ff')}
          style={colorPickStyles.cpurp}
        >
          <Text />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => this.genericInputHandler('colorPick', '#cccccc')}
          style={colorPickStyles.cgrey}
        >
          <Text />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => this.genericInputHandler('colorPick', '#dddddd')}
          style={colorPickStyles.clight}
        >
          <Text />
        </TouchableHighlight>



        <TouchableHighlight
          onPress={() => onAdd(data.lists, name, colorPick, boardId)}
          style={styles.saveButton}
        >
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableHighlight>

      </View>
    );
  }
}

export default NewTaskList;
