import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Boards from '../views/Boards';
import NewBoard from '../views/NewBoard';
import Board from '../views/Board';
import Tasks from '../views/Tasks';
import EditComponent from '../views/EditBoard';

const StackNavigator = createStackNavigator({
  Boards: {
    screen: Boards,
    navigationOptions: {
      title: 'Boards',
    },
  },
  NewBoard: {
    screen: NewBoard,
    navigationOptions: {
      title: 'Create board',
    },
  },
  Board: {
    screen: Board,
    navigationOptions: {
      title: 'Board',
    },
  },
  Tasks: {
    screen: Tasks,
    navigationOptions: {
      title: 'Tasks',
    },
  },
  EditBoard: {
    screen: EditComponent,
    navigationOptions: {
      title: 'Edit',
    },
  },
});

export default createAppContainer(StackNavigator);
