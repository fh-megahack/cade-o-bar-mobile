import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles'

export default function Rota() {


  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Template <Text style={styles.name}>Cade o bar?</Text></Text>
        <Text style={styles.description}>Bem Vindo(a) ao Perfil!</Text>
        <StatusBar style="dark" />
      </View>
    </>
  );
}