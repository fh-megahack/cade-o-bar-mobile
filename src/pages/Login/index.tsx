import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import api from '../../services/api'

// Icones
import { Feather as Icon } from '@expo/vector-icons';

import styles from './styles'

export default function Login() {
  
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')

  const navigation = useNavigation();

  function handleSubmit() {

    api.post('/login', {
      email: email,
      password: password
    })
    .then(function (response) {
      navigation.navigate('Home', {userInfo: response.data});
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image source={require("../../assets/login/login-top-bg.png")} style={styles.logo}></Image>
      </View>
      <ImageBackground source={require("../../assets/login/yellow-Bg.png")} resizeMode='cover' style={styles.footer}>
        <View style={styles.action}>
          <Icon name="user" color="#FFF" size={20} style={{ padding: 10, marginTop: 20 }} />
          <TextInput
            onChangeText={setEmail}
            placeholder="E-mail"
            placeholderTextColor="#fff"
            style={styles.textInput}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
        <View style={styles.action}>
          <Icon name="lock" color="#FFF" size={20} style={{ padding: 10, marginTop: 20 }} />
          <TextInput
            secureTextEntry
            onChangeText={setPassword}
            placeholder="Senha"
            placeholderTextColor="#fff"
            style={styles.textInput}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
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
          <Text style={{ color: '#fdf7fa' }}>Não possui conta?</Text>
          <Text style={{ color: '#577590', fontWeight: 'bold' }}> Registre-se</Text>
        </View>
      </ImageBackground>
    </View>
  );
}
