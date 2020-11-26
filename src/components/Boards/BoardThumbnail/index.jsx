import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { AntDesign } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import styles from './styles';

const BoardThumbnail = ({
  id, name, description, thumbnailPhoto, onLongPress, isSelected, navigation: { navigate },
}) => (
  <TouchableOpacity
    activeOpacity={0.7}
    onLongPress={() => onLongPress(id)}
    onPress={() => navigate('Board', { boardId: id, boardName: name })}
  >
    <View style={styles.boardThumbnailContainer}>
      {
        isSelected
        ?
        <AntDesign name="checkcircleo" style={styles.checkmark} />
        :
        <></>
      }
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{ uri: thumbnailPhoto }}
      />
      <View>
        <Text style={styles.thumbnailName}>{name}</Text>
        <Text style={styles.thumbnailText}>{description}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

BoardThumbnail.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  thumbnailPhoto: PropTypes.string.isRequired,
  onLongPress: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default withNavigation(BoardThumbnail);
