import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";

// Icones
import { Feather as Icon } from '@expo/vector-icons';

import styles from './styles'

export default function Login() {

  const navigation = useNavigation();

  function handleNavigateToHome() {
    navigation.navigate('Home')
  }


  return (
    <View style={styles.container}>
    <StatusBar hidden={true} barStyle="light-content" />
      <View style={styles.header}>
          <ImageBackground source={require("../../assets/login/logoLogin.png")} style={styles.imageBackground}></ImageBackground>
          <Image
            style={styles.imageWave}
            source={require('../../assets/login/beer.png')}
          />
      </View>
      <View style={styles.footer}>
              <View style={styles.action}>
                  <Icon name="user" color="#FFF" size={20} style={{ padding: 10, marginTop: 20 }} />
                  <TextInput 
                    placeholder="E-mail"
                    placeholderTextColor = "#fff"
                    style={styles.textInput}
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
              </View>
              <View style={styles.action}>
                  <Icon name="lock" color="#FFF" size={20} style={{ padding: 10, marginTop: 20 }} />
                  <TextInput 
                    secureTextEntry
                    placeholder="Senha"
                    placeholderTextColor = "#fff"
                    style={styles.textInput}
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
              </View>
            
            <TouchableOpacity style={styles.button} onPress={handleNavigateToHome}>
              <Text style={styles.buttonText}>
                Entrar
              </Text>
              <View style={styles.buttonIcon}>
                <Text>
                  <Icon name="arrow-right" color="#FFF" size={24} />
                </Text>
              </View>
           </TouchableOpacity>
           
            <View style={styles.signUp}>
                  <Text style={{color:'#fdf7fa'}}>Não possui conta?</Text>
                  <Text style={{color:'#577590', fontWeight: 'bold'}}> Registre-se</Text>
            </View>
      </View>
  </View>
  );
}
