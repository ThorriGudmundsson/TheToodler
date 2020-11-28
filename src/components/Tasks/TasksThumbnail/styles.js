import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  thumbnailName: {
    fontSize: 24,
    fontWeight: '800',
    flexDirection: 'column',
    paddingTop: 10,
    paddingLeft: 20,


  },
  thumbnailText: {
    fontSize: 16,
    fontWeight: '600',
    flexDirection: 'column',
    paddingTop: 0,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,

  },
  taskThumbnailContainer: {
    flexDirection: 'row',
    width: 'auto',
    height: 'auto',
    backgroundColor:'#d4c65d',
    margin: 10,
  },
  checkmark: {
    position: 'absolute',
    top: 15,
    right: 15,
    fontSize: 20,
  },
  TaskIsFinished: {
    position: 'absolute',
    top: 40,
    right: -5,
    color: '#fff',
    fontSize: 20,
    fontWeight: '900',
    padding: 10,
    backgroundColor: '#000',
    borderTopLeftRadius:20,
    borderBottomRightRadius:20,


  },
});
