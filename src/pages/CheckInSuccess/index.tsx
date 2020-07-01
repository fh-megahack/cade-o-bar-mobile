import React from 'react';
import styles from './styles'
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Feather as Icon } from '@expo/vector-icons';

export default function CheckInSuccess() {

  const navigation = useNavigation();

  function handleNavigateToHome() {
    navigation.navigate('Home')
  }
  function handleNavigateToRoullete() {
    navigation.navigate('Roullete')
  }

  return (
    <View style={styles.container}>

      <View style={styles.containerTop}>
        <TouchableOpacity onPress={handleNavigateToHome}>
          <Icon style={styles.arrowLeft} name="arrow-left" color="#FFF" size={30} />
        </TouchableOpacity>
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
          <TouchableOpacity onPress={handleNavigateToRoullete}>
            <Image
              source={require('../../assets/login/play.png')}
            />
          </TouchableOpacity>
        </View>

      </View>

    </View>
  );
}