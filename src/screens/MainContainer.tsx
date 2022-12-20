import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { translate } from '../localization/services';
import { useAppSelector } from '../redux/hooks/hooks';
import {HomeScreen} from './home-page';
import {SettingsScreen} from './setttings';

const Tab = createBottomTabNavigator();

export function MainContainer() {
  const language = useAppSelector(
    state => state.language,
  );

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          
          return (
            <Icon
              name={route.name == 'Home' ? 'home' : 'cog'}
              size={23}
              color="#000"
            />
          );
        },
      })}>
      <Tab.Screen name={translate('homeTitle')} component={HomeScreen} />
      <Tab.Screen name={translate('settingsTitle')} component={SettingsScreen} />
    </Tab.Navigator>
  );
}
