import { StyleSheet } from 'react-native';

export const colorButton = {
  padding: 20,
  marginLeft: 10,
  marginRight: 10,
  marginTop: 5,
  height: 30,
  borderRadius: 15,
};

export default StyleSheet.create({
  helpText: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    color: '#996633',
  },
  cwhite: {
    ...colorButton,
    backgroundColor: '#ffffff',
    borderColor: 'grey',
    borderWidth: 1,

  },
  cdark: {
    ...colorButton,
    backgroundColor: '#555555',

  },
  cgreen: {
    ...colorButton,
    backgroundColor: '#00ff00',
  },
  cred: {
    ...colorButton,
    backgroundColor: '#ff0000',
  },
  cblue: {
    ...colorButton,
    backgroundColor:  '#0000ff',
  },
  cyello: {
    ...colorButton,
    backgroundColor: '#ebb734',
  },
  cpurp: {
    ...colorButton,
    backgroundColor: '#ff00ff',
  },
  cgrey: {
    ...colorButton,
    backgroundColor: '#cccccc',

  },
  clight: {
    ...colorButton,
    backgroundColor: '#dddddd',

  },



});
