import React from 'react';
import {StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import {Provider} from 'react-redux';
import {store} from './src/redux/store/store';

import {MainContainer} from './src/screens/index';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <MainContainer />
      </Provider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
