import React from 'react';
import { Text, View, TouchableOpacity, Image, Clipboard } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styles from './styles'

import { Feather as Icon } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function gerarCupom() {
  return Math.random().toString(36).slice(-6).toUpperCase();
}

export default function Discount() {
  const navigation = useNavigation();

  function handleNavigateToProfile() {
    navigation.navigate('Profile')
  }

  function handleNavigateToHome() {
    navigation.navigate('Home')
  }

  const cupom = gerarCupom()
  
  return (
    <View style={styles.container}>

      <View style={styles.containerTop}>
        <TouchableOpacity onPress={handleNavigateToProfile}>
          <Icon style={styles.arrowLeft} name="arrow-left" color="#FFF" size={30} />
        </TouchableOpacity>
        <Text style={styles.textTop}>Cupom</Text>
      </View>

      <View style={styles.containerBottom}>
        <Image
          style={styles.imageTicket}
          source={require('../../assets/discount/ticket.png')}
        />
        <Text style={styles.gerado}> Cupom gerado!</Text>

        <View style={{alignItems: 'center'}}>
          <Text style={styles.cupomText1}>Seu desconto foi gerado, basta inserir</Text>
          <Text style={styles.cupomText}>o código abaixo em sua próxima</Text>
          <Text style={styles.cupomText}>compra no aplicativo de nossos</Text>
          <Text style={styles.cupomText}>parceiros!</Text>
        </View>

        <View style={styles.buttonCupom}>
          <Text style={styles.buttonCupomText}>{cupom}</Text>
          <TouchableOpacity onPress={() => Clipboard.setString(cupom)} style={styles.buttonCupomIcon}>
            <MaterialCommunityIcons name="checkbox-multiple-blank-outline" size={24} color="#626262" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleNavigateToHome}>
          <MaterialCommunityIcons name="location-enter" size={24} color="#fff" />
          <Text style={styles.buttonText}>
            Ir para o Bar
              </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};