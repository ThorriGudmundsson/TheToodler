import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import Toolbar from '../../components/Toolbar';
import NewBoardCreation from '../../components/Boards/NewBoardCreation';
import data from '../../resources/data.json';

function onAdd(somedata) {
  let nextId = 0; // in case that boards are emty
  if (somedata.length > 0) {
    nextId = somedata[somedata.length - 1].id + 1;
  }

  somedata.push({
    id: nextId,
    name: 'new board',
    thumbnailPhoto: 'https://5.imimg.com/data5/MC/OH/MY-15542396/green-school-board-500x500.jpg',
    description: 'This is newely made board',
  });

}

const NewBoard = ({ navigation: { navigate } }) =>(
  <View>

    <TouchableHighlight onPress={() => onAdd(data.boards)}>
      <Text>New dummy board</Text>
    </TouchableHighlight>

<Text> </Text>
    <TouchableHighlight onPress={() => navigate('Boards')}>
    <Text>back to board</Text>
  </TouchableHighlight>
    <Text> </Text>
    <Text>
    ---------------------

  </Text>

  </View>
);
export default NewBoard;
