import React from 'react';
import { View, FlatList, Text } from 'react-native';
import styles from './styles';
import BoardThumbnail from '../BoardThumbnail';

const BoardList = ({ boards }) => (
  <View style={{ flex: 1 }}>
    <FlatList
      numColumns={1}
      data={boards}
      renderItem={({ item: { id, name, thumbnailPhoto } }) => {
        return (
          <BoardThumbnail thumbnailPhoto={thumbnailPhoto} />
        )
      }}
      keyExtractor={(board) => board.name}
      />
  </View>
);

export default BoardList;
