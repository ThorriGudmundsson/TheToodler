import React from 'react';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import TasksThumbnail from '../TasksThumbnail';

const TasksList = ({ tasks, onLongPress, selectedTasks }) => (
  <View style={styles.listContainer}>
    <FlatList
      numColumns={1}
      data={tasks}
      renderItem={({
        item: {
          id, name, description, isFinished, listId,
        },
      }) => (
        <TasksThumbnail
          id={id}
          name={name}
          description={description}
          isFinished={isFinished}
          listId={listId}
          onLongPress={onLongPress}
          isSelected={selectedTasks.indexOf(id) !== -1}
        />
      )}
      keyExtractor={(taskslist) => taskslist.id.toString()}
    />
  </View>
);

TasksList.propTypes = {
  // Boards
  tasks: PropTypes.arrayOf(PropTypes.shape({
    // Properties of boards
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    // A board description is optional
    description: PropTypes.string.isRequired,
    isFinished: PropTypes.bool.isRequired,
    listId: PropTypes.number.isRequired,
  })).isRequired,
  onLongPress: PropTypes.func.isRequired,
  // Selected boards have their id stored in array as number
  selectedTasks: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default TasksList;
