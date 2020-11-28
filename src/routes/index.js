import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Boards from '../views/Boards';
import NewBoard from '../views/NewBoard';
import Board from '../views/Board';
import Tasks from '../views/Tasks';
import NewTaskList from '../views/NewTaskList';
import EditBoard from '../views/EditBoard';
import EditTaskList from '../views/EditTaskList';
import NewTask from '../views/NewTask';
import EditTask from '../views/EditTask';

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
  NewTaskList: {
    screen: NewTaskList,
    navigationOptions: {
      title: 'Create Task-list',
    },
  },
  Tasks: {
    screen: Tasks,
    navigationOptions: {
      title: 'Tasks',
    },
  },
  EditBoard: {
    screen: EditBoard,
    navigationOptions: {
      title: 'Edit',
    },
  },
  EditTaskList: {
    screen: EditTaskList,
    navigationOptions: {
      titles: 'EditTaskList',
    },
  },
  NewTask: {
    screen: NewTask,
    navigationOptions: {
      titles: 'Create Task',
    },
  },
  EditTask: {
    screen: EditTask,
    navigationOptions: {
      titles: 'EditTask',
    },
  },
});

export default createAppContainer(StackNavigator);
