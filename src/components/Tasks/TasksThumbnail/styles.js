import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  thumbnailName: {
    fontSize: 14,
    fontWeight: 'bold',
    flexDirection: 'column',
    margin: 8,
  },
  thumbnailText: {
    fontSize: 11,
    fontWeight: 'normal',
    flexDirection: 'column',
    padding: 8,
  },
  taskThumbnailContainer: {
    flexDirection: 'row',
    width: 'auto',
    height: 'auto',
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
  TaskIsFinished: {
    flexDirection: 'column',
    margin: 8,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
