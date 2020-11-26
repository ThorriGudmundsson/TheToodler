import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import Toolbar from '../../components/Toolbar';
import NewBoardCreation from '../../components/Boards/NewBoardCreation';
import data from '../../resources/data.json';


function onAdd(somedata) {

  somedata.push({ id: somedata[somedata.length - 1].id + 1,
    name: 'new board',
    thumbnailPhoto: 'https://5.imimg.com/data5/MC/OH/MY-15542396/green-school-board-500x500.jpg',
    description: 'This is newely made board'
});

  console.log(somedata);
}
let b = data.boards
const NewBoard = ({ navigation: { navigate } }) =>(
  <View>

    <TouchableHighlight onPress={() => onAdd(b)}>
      <Text>New dummy board</Text>
    </TouchableHighlight>

<Text> </Text>
    <TouchableHighlight onPress={() => navigate('Boards')}>
    <Text>back to board</Text>
  </TouchableHighlight>
  <Text> </Text>
  <Text>því miður virkar ekki alveg alveg en ef board index er save-að í Atom þá byrtist nýr kassi </Text>

  </View>
);
export default NewBoard;
