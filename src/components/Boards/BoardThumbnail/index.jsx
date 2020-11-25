import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';

const BoardThumbnail = ({
  id, name, description, thumbnailPhoto, onLongPress,
}) => (
  <TouchableOpacity onLongPress={() => onLongPress()}>
    <View style={styles.boardThumbnailContainer}>
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

export default BoardThumbnail;
