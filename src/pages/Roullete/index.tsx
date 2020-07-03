import React from 'react';
import styles from './styles'
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Feather as Icon } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Roulette() {

  const navigation = useNavigation();

  function handleNavigateToHome() {
    navigation.navigate('Home')
  }
  function handleNavigateToDetails() {
    navigation.navigate('Details')
  }

  return (
    <View style={styles.container}>

      <View style={styles.containerTop}>
        <TouchableOpacity onPress={handleNavigateToHome}>
          <Icon style={styles.arrowLeft} name="arrow-left" color="#FFF" size={30} />
        </TouchableOpacity>
        <Text style={styles.textTop}>Roleta</Text>
      </View>

      <View style={styles.containerBottom}>
        <View style={{ marginTop: 40 }}>
          <Image
            source={require('../../assets/login/roulette.png')}
          />
        </View>

        <Text style={styles.textRoulette0}>Ganhe Brindes!</Text>
        <Text style={styles.textRoulette1}>Concorra a brindes e descontos para poder usar neste estabelecimento!</Text>
        
        <View>
          <Image
              source={require('../../assets/login/rouletteGif.gif')}
              style={{width: 150, height:150, marginTop: 80 }}
            />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleNavigateToDetails}>
              <MaterialCommunityIcons name="location-enter" size={24} color="#fff" />
              <Text style={styles.buttonText}>
                Ir para o Bar
              </Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}