import { StyleSheet } from 'react-native';
import { darkerBlue } from '../../styles/colors';

export default StyleSheet.create({
  toolbar: {
    paddingTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    backgroundColor: darkerBlue,
  },
  toolbarAction: {
    flex: 1,
    alignItems: 'center',
  },
  toolbarActionText: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 16,
  },
});
