import React from 'react';
import { View, Text, TouchableHighlight, TextInput, Image } from 'react-native';
import Toolbar from '../../components/Toolbar';
import NewBoardCreation from '../../components/Boards/NewBoardCreation';
import data from '../../resources/data.json';
import ImportImages from '../Images';

function onAdd(somedata) {
  somedata.push({
    id: somedata[somedata.length - 1].id + 1,
    name: 'new board',
    thumbnailPhoto: 'https://5.imimg.com/data5/MC/OH/MY-15542396/green-school-board-500x500.jpg',
    description: 'This is newely made board',
});

  //console.log(somedata);
}
class InputComponent extends React.Component {
  state = {
        name: '',
        description: ''
    }
    genericInputHandler(name, value) {
        this.setState({ [ name ]: value });
    }

    render() {
        return (
            <View>
                <TextInput
                    style={{
                      height: 40,
                      borderColor: 'gray',
                      borderWidth: 1
                    }}
                    placeholder="Name the board"
                    value={ this.state.name}
                    onChangeText={ text => this.genericInputHandler('name', text) } />
              <TouchableHighlight>
                  <Text>Add image</Text>
              </TouchableHighlight>
              <ImportImages />

              <TextInput
                style={{
                  height: 40,
                  borderColor: 'gray',
                  borderWidth: 1
                }}
                placeholder="Add description"
                value={ this.state.description}
                secureTestEntry={ true }
                onChangeText={ text => this.genericInputHandler('description', text) } />
                <TouchableHighlight onPress={() => onAdd(data.boards)}>
                  <Text>New dummy board</Text>
                </TouchableHighlight>

            <Text> </Text>
                <TouchableHighlight onPress={() => navigate('Boards')}>
                <Text>back to board</Text>
              </TouchableHighlight>
            </View>
        );
    }
}

export default InputComponent;


// export default NewBoard;
