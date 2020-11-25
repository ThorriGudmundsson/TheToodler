import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles';

const BoardThumbnail = ({ id, name, description, thumbnailPhoto }) => (
  <View style={styles.boardThumbnailContainer}>
    <Image
      style={styles.image}
      resizeMode="cover"
      source={{ uri: thumbnailPhoto }}
    />
    <View style={styles.thumbnailText}>
      <Text style={styles.thumbnailText}>{name}</Text>
      <Text style={styles.thumbnailText}>{description}</Text>
    </View>
  </View>
);

export default BoardThumbnail;
