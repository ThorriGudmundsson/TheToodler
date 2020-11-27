import React from 'react';
import { View, Text, TouchableHighlight, TextInput, Image } from 'react-native';
import Toolbar from '../../components/Toolbar';
import NewBoardCreation from '../../components/Boards/NewBoardCreation';
import data from '../../resources/data.json';
//import ImportImages from '../Images';

function onAdd(somedata, nameField, descriptionField, photoURLField) {
  let nextId = 0; // in case that boards are emty
  if (somedata.length > 0) {
    nextId = somedata[somedata.length - 1].id + 1;
  }

  somedata.push({
    id: nextId,
    name: nameField,
    thumbnailPhoto: photoURLField,
    description:  descriptionField,
  });

}

class InputComponent extends React.Component {
  state = {
        name: '',
        description: '',
        photoURL:'https://5.imimg.com/data5/MC/OH/MY-15542396/green-school-board-500x500.jpg'
    }
    genericInputHandler(name, value) {
        this.setState({ [ name ]: value });
    }

    render() {
        return (
            <View>
                <TextInput
                    style={{
                      margin: 20,
                      height: 40,
                      borderColor: 'gray',
                      borderWidth: 1
                    }}
                    placeholder="Name the board"
                    value={ this.state.name}
                    onChangeText={ text => this.genericInputHandler('name', text) } />




              <TextInput
                style={{
                  margin: 20,
                  height: 40,
                  borderColor: 'gray',
                  borderWidth: 2
                }}
                placeholder="Add description"
                value={ this.state.description}
                secureTestEntry={ true }
                onChangeText={ text => this.genericInputHandler('description', text) } />

                <TextInput
                  style={{
                    margin: 20,
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 2
                  }}

                  value={ this.state.photoURL}
                  secureTestEntry={ true }
                  onChangeText={ text => this.genericInputHandler('photoURL', text) } />


                <TouchableHighlight>
                    <Text>Add image (tempurary not in use)</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => onAdd(data.boards, this.state.name,  this.state.description, this.state.photoURL)}>
                  <Text>Save</Text>
                </TouchableHighlight>

            </View>
        );
    }
}

export default InputComponent;


// export default NewBoard;
