import {Text, View} from 'react-native';
import {useAppDispatch, useAppSelector} from '../redux/hooks/hooks';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useEffect } from 'react';
import { setMessage } from "../redux/reducers/productReducer"

const Tab = createBottomTabNavigator();

function HomeScreen() {

    const count = useAppSelector(state => state.products.value);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setMessage('2'))
    }, [])

    console.log(count)

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
  
  function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }


export const MainScreen = () => {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            // You can return any component that you like here!
            return <Icon name={route.name == "Home" ? "home" : "cog"} size={23} color="#000" />;
          }
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
  );
};
