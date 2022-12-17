import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {HomeScreen} from './home-page';
import {SettingsScreen} from './setttings';

const Tab = createBottomTabNavigator();

export function MainContainer() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          // You can return any component that you like here!
          return (
            <Icon
              name={route.name == 'Home' ? 'home' : 'cog'}
              size={23}
              color="#000"
            />
          );
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
