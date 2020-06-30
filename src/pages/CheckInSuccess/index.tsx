import React from 'react';
import styles from './styles'

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import { Feather as Icon } from '@expo/vector-icons';

export default function CheckInSuccess() {
  return (
    <View style={styles.container}>

      <View style={styles.containerTop}>
        <Icon style={styles.arrowLeft} name="arrow-left" color="#FFF" size={30} />
        <Text style={styles.textTop}>Check-In Success</Text>
      </View>

      <View style={styles.containerBottom}>
        <View style={styles.imageCheck}>
          <Image
            source={require('../../assets/login/success.png')}
          />
        </View>

        <Text style={styles.textCheck0}>Check-in Realizado</Text>
        <Text style={styles.textCheck1}>com Sucesso!</Text>
        
        <Text style={styles.textCheck2}>Comece sua descobertas nesse</Text>
        <Text>ambiente!</Text>
        
        <Text style={styles.textCheck3}>Você tem direito a uma rodada da</Text>
        <Text>sorte, clique no botão abaixo e receba</Text>
        <Text>um mimo! </Text>

        <View style={styles.imagePlay}>
          <Image
            source={require('../../assets/login/play.png')}
          />
        </View>

      </View>

    </View>
  );
}