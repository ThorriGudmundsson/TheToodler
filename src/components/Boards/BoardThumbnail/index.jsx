import React from 'react';
import { Image } from 'react-native';
import styles from './styles';

const BoardThumbnail = ({ file, name }) => (
  <Image
    style={styles.image}
    resizeMode="cover"
    source={{ uri: file }}
  />
);

export default BoardThumbnail;
