import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { AppLoading } from 'expo';

import Routes from './src/routes'

import { Roboto_300Light, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { OpenSans_400Regular, OpenSans_600SemiBold, OpenSans_300Light, useFonts } from '@expo-google-fonts/open-sans'

export default function Main() {

  const [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    OpenSans_300Light,
    OpenSans_400Regular,
    OpenSans_600SemiBold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </>
  );
}