import React from 'react';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import BoardThumbnail from '../BoardThumbnail';

const BoardList = ({ boards, onLongPress, selectedBoards }) => (
  <View style={styles.listContainer}>
    <FlatList
      numColumns={1}
      data={boards}
      renderItem={({
        item: {
          id, name, description, thumbnailPhoto,
        },
      }) => (
        <BoardThumbnail
          id={id}
          name={name}
          description={description}
          thumbnailPhoto={thumbnailPhoto}
          onLongPress={onLongPress}
          isSelected={selectedBoards.indexOf(id) !== -1}
        />
      )}
      keyExtractor={(board) => board.id.toString()}
    />
  </View>
);

BoardList.propTypes = {
  // Boards
  boards: PropTypes.arrayOf(PropTypes.shape({
    // Properties of boards
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    // A board description is optional
    description: PropTypes.string,
    thumbnailPhoto: PropTypes.string.isRequired,
  })).isRequired,
  onLongPress: PropTypes.func.isRequired,
  // Selected boards have their id stored in array as number
  selectedBoards: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default BoardList;
