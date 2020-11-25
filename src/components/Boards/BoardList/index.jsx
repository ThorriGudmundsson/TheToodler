import React from 'react';
import { View, FlatList, Text } from 'react-native';
import styles from './styles';
import BoardThumbnail from '../BoardThumbnail';

const BoardList = ({ boards }) => (
  <View style={styles.listContainer}>
    <FlatList
      numColumns={1}
      data={boards}
      renderItem={({ item: { id, name, thumbnailPhoto } }) => (
        <>
          <Text>
            <BoardThumbnail thumbnailPhoto={thumbnailPhoto} />
            {name}
          </Text>
        </>
      )}
      keyExtractor={(board) => board.name}
    />
  </View>
);

export default BoardList;
