import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';

import App from './src/index'

export default function Main() {
  return (
    <>
      <StatusBar style="auto" />
      <App />
    </>
  );
}