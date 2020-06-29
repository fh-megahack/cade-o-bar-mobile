import React from 'react';
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

import styles from './styles'

export default function NavBar() {

  return (
    <View style={styles.container}>
    <StatusBar hidden={true} barStyle="light-content" />
      <View style={styles.header}>
          <ImageBackground source={require("../../assets/login/map_girl.svg")} style={styles.imageBackground}></ImageBackground>
          <Image
            style={styles.imageWave}
            source={require('../../assets/login/beer.svg')}
          />
      </View>
      <View style={styles.footer}>
           
            <View style={styles.action}>
                <TextInput 
                  placeholder="E-mail"
                  style={styles.textInput}
                  autoCapitalize="none"
                  autoCorrect={false}
                />
            </View>

            <View style={styles.action}>
                <TextInput 
                  secureTextEntry
                  placeholder="Senha"
                  style={styles.textInput}
                  autoCapitalize="none"
                  autoCorrect={false}
                />
            </View>
            
            <TouchableOpacity 
            style={styles.animation}
            >
              <Text style={styles.textLogin}>Entrar</Text>
            </TouchableOpacity>

            <View style={styles.signUp}>
                  <Text style={{color:'#fdf7fa'}}>Não possui conta?</Text>
                  <Text style={{color:'#577590'}}> Registre-se</Text>
            </View>
      </View>
  </View>
  );
}
