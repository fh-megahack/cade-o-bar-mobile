import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar, Text, View, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { AntDesign } from '@expo/vector-icons';

// Estilos
import styles from './styles'
import BottomBar from '../../components/Navigator';

export default function CheckIn() {

  const navigation = useNavigation();

  function handleNavigateToHome() {
    navigation.navigate('Home')
  }

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = () => {
    setScanned(true);

    navigation.navigate('CheckInSuccess')
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>

        <View style={styles.header}>
          <TouchableOpacity onPress={handleNavigateToHome} >
            <AntDesign name="arrowleft" size={24} color="#fff" />
          </TouchableOpacity>
          <View>
            <Text style={styles.welcomeText}>Certo <Text style={styles.welcomeTextName}>Pedro</Text>,</Text>
            <Text style={styles.welcomeText}>Escaneie o Código QR e explore esse ambiente incrível!</Text>
          </View>
        </View>


        <View style={styles.mapContainer}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={styles.scanner}
          />
        </View>

        <BottomBar />

      </View>
    </>
  );
}

