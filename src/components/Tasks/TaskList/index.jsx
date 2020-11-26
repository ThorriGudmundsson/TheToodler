import React from 'react';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import TaskListThumbnail from '../TaskListThumbnail';

const TaskList = ({ tasklists, onLongPress, selectedTaskLists }) => (
  <View style={styles.listContainer}>
    <FlatList
      numColumns={1}
      data={tasklists}
      renderItem={({
        item: {
          id, name, color, boardId,
        },
      }) => (
        <TaskListThumbnail
          id={id}
          name={name}
          color={color}
          boardId={boardId}
          onLongPress={onLongPress}
          isSelected={selectedTaskLists.indexOf(id) !== -1}
        />
      )}
      keyExtractor={(tasklist) => tasklist.id.toString()}
    />
  </View>
);

TaskList.propTypes = {
  // Boards
  tasklists: PropTypes.arrayOf(PropTypes.shape({
    // Properties of boards
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    // A board description is optional
    color: PropTypes.string.isRequired,
    boardId: PropTypes.number.isRequired,
  })).isRequired,
  onLongPress: PropTypes.func.isRequired,
  // Selected boards have their id stored in array as number
  selectedTaskLists: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default TaskList;
