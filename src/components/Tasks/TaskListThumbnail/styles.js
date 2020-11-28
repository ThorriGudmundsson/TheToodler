import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  thumbnailName: {
    fontSize: 18,
    fontWeight: '600',
    flexDirection: 'column',
    padding: 16,
  },
  thumbnailText: {
    fontSize: 11,
    fontWeight: 'normal',
    flexDirection: 'column',
    padding: 10,
  },
  boardThumbnailContainer: {
    flexDirection: 'row',
    width: 'auto',
    height: 60,
    margin: 4,
  },
  checkmark: {
    position: 'absolute',
    top: 20,
    right: 15,
    fontSize: 20,
  },
});
