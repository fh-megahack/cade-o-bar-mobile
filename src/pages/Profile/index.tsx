import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SvgUri } from 'react-native-svg'
import { useNavigation, useRoute } from '@react-navigation/native'
import { AntDesign as Icon } from '@expo/vector-icons';

import styles from './styles'
import BottomBar from '../../components/Navigator';

export default function Rota() {
  const navigation = useNavigation()

  function handleNavigationBack() {
    navigation.goBack()
  }

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <TouchableOpacity onPress={handleNavigationBack} style={styles.header}>
          <Icon name='arrowleft' size={24} color='#fff' style={styles.headerIcon} />
          <Text style={styles.headerText}>Perfil</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <BottomBar />
      </View>
    </>
  );
}