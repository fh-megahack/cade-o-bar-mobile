import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Rota() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Template <Text style={styles.name}>Cade o bar?</Text></Text>
      <Text style={styles.description}>Bem Vindo(a) a Roleta!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#37323e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontWeight: "bold",
  },
  name: {
    color: '#f3ca40',
    fontWeight: "bold",
  },
  description: {
    top: 10,
    color: '#BFBDC1',
    fontWeight: '100',
    width: 300,
    textAlign: 'center'
  },
});
