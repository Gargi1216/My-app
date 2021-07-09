import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
    <WelcomeScreen/>
  );
}

const switchNavigator = createSwitchNavigator({
  WelcomeScreen : {screen:WelcomeScreen},
  HomeScreen : {screen:HomeScreen},
})

const appContainer = createAppContainer(switchNavigator);

