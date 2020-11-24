import React from 'react';
import { View, FlatList, Text } from 'react-native';
import styles from './styles';

const BoardList = ({ boards }) => (
  <View style={{ flex: 1 }}>
    <FlatList
      numColumns={1}
      data={boards}
      renderItem={({ item: { name } }) => {
        return (
          <Text>{name}</Text>
        )
      }}
      keyExtractor={(board) => board.name}
      />
  </View>
);

export default BoardList;
