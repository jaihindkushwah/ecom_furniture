/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import RootNavigationBottomTab from 'navigation/RootNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useColorScheme} from 'react-native';
import {Provider} from 'react-redux';
import {store} from 'store/store';

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider
          style={{backgroundColor: isDarkMode ? 'black' : 'white'}}>
          <RootNavigationBottomTab />
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}
