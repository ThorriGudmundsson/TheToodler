import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { AntDesign } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import styles from './styles';

const TaskListThumbnail = ({
  id, name, color, boardId, onLongPress, isSelected, navigation: { navigate },
}) => (
  <TouchableOpacity
    activeOpacity={0.7}
    onLongPress={() => onLongPress(id)}
    onPress={() => navigate('Board', { boardId: id, boardName: name })}
  >
    <View style={[styles.boardThumbnailContainer, {
      backgroundColor: color,
    }]}
    >
      {
        isSelected
        ?
        <AntDesign name="checkcircleo" style={styles.checkmark} />
        :
        <></>
      }
      <View>
        <Text style={styles.thumbnailName}>{name}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

TaskListThumbnail.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  boardId: PropTypes.number.isRequired,
  onLongPress: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default withNavigation(TaskListThumbnail);
