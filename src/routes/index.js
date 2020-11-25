import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Boards from '../views/Boards';

const StackNavigator = createStackNavigator({
  Boards: {
    screen: Boards,
    navigationOptions: {
      title: 'Boards',
    },
  },
});

export default createAppContainer(StackNavigator);
