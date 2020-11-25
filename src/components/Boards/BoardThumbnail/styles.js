import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  image: {
    width: 70,
    height: 70,
    margin: 10,
  },
  thumbnailText: {
    fontSize: 14,
    fontWeight: 'bold',
    flexDirection: 'column',
  },
  boardThumbnailContainer: {
    flexDirection: 'row',
    width: 'auto',
    height: 'auto',
    backgroundColor: '#99ff99',
    borderWidth: 1,
    borderColor: 'black',
    margin: 4,
  },
  checkmark: {
    position: 'absolute',
    top: 15,
    right: 15,
    fontSize: 20,
  },
});
