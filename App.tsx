import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

import App from './src/index'

export default function Main() {

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        style="auto"
        backgroundColor="transparent"
        translucent
       />
      <App />
    </>
  );
}