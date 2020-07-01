import React from 'react';
import styles from './styles'

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

import { Feather as Icon } from '@expo/vector-icons';

export default function Rota() {
  return (
    <View style={styles.container}>

      <View style={styles.containerTop}>
        <Icon style={styles.arrowLeft} name="arrow-left" color="#FFF" size={30} />
        <Text style={styles.textTop}>Check-Out</Text>
      </View>


      <View style={styles.containerBottom}>  
        <View style={{marginTop: 50}}>
          <Image
            source={require('../../assets/login/exit.png')}
          />
        </View>
        
        <Text style={styles.textExit}>Você está prestes a sair</Text>

        <Text style={{marginTop: 20, color: 'white'}}>Antes de fazer o Check-out, que tal</Text>
        <Text style={{color: 'white'}}>avaliar a sua experiencia?</Text>
        
        <View style={{marginTop: 50}}>
          <Image
            source={require('../../assets/login/Rating.png')}
          />
        </View>

        <View style={styles.action}>
          <TextInput 
            placeholder="Deixe seu comentário..."
            placeholderTextColor = "#808080"
            style={styles.textInput}
            autoCapitalize="none"
            autoCorrect={false}
          />
      </View>

      <TouchableOpacity style={styles.button}>
            <Image
              source={require('../../assets/login/check.png')}
              style={{width: 25, height: 25, marginLeft: 30}}
            />
            <Text style={styles.buttonText}>
              Fazer Check-out
            </Text>
      </TouchableOpacity>

      </View>
      

    </View>
  );
};