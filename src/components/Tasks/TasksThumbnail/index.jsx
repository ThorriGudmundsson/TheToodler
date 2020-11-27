import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { AntDesign } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import styles from './styles';

const TasksThumbnail = ({
  id, name, description, isFinished, listId, onLongPress, isSelected, navigation: { navigate },
}) => (
  <TouchableOpacity
    activeOpacity={0.7}
    onLongPress={() => onLongPress(id)}
  >
    <View style={styles.taskThumbnailContainer}>
      {
        isSelected
        ?
        <AntDesign name="checkcircleo" style={styles.checkmark} />
        :
        <></>
      }
      <View>
        <Text style={styles.thumbnailName}>{name}</Text>
        <Text style={styles.thumbnailText}>{description}</Text>
        {
          isFinished
          ?
          <Text style={styles.TaskIsFinished}>Done!</Text>
          :
          <></>
        }
      </View>
    </View>
  </TouchableOpacity>
);

TasksThumbnail.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isFinished: PropTypes.bool.isRequired,
  listId: PropTypes.number.isRequired,
  onLongPress: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default withNavigation(TasksThumbnail);
