import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar, Text, View, TouchableOpacity, Modal, Alert, StyleSheet, TouchableHighlight } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { AntDesign } from '@expo/vector-icons';
import LottieView from "lottie-react-native";

import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'Non-serializable values were found in the navigation state',
]);

// Estilos
import styles from './styles'
import BottomBar from '../../components/Navigator';
import api from '../../services/api';

interface User {
  id: number
  image: string
  name: string
  email: string
  whatsapp: string
  city: string
  uf: string
  password: string
  url_image: string
}

interface Point {
  position: number
  total_points: number
  rescue_points: number
}

interface Discovery {
  id: number
  user_id: number
  bar_id: number
  date: string
  bar_name: string
  bar_image: string
}

interface Params {
  userInfo: User
}

export default function CheckIn() {
  const route = useRoute()
  const navigation = useNavigation()

  const { userInfo } = route.params as Params

  const [modalVisible, setModalVisible] = useState(false);
  const [loadVisible, setLoadVisible] = useState(false);

  function handleNavigateToHome() {
    navigation.navigate('Home')
  }

  const [hasPermission, setHasPermission] = useState<any>(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanner = async (result: any) => {
    setLoadVisible(true)
    setScanned(true);

    if (result && result.data) {
      const barInfo = await api.get(`bars/${result.data}`)

      setLoadVisible(false)
      if (barInfo) {
        navigation.navigate('CheckInSuccess', { userInfo, barInfo })
      } else {
        setModalVisible(true)
        setScanned(false);
      }
    } else {
      setLoadVisible(false)
      setModalVisible(true)
      setScanned(false);
    }
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Ops...</Text>
              <Text style={styles.modalText}>Não foi possível realizar o check-in!</Text>
              <TouchableHighlight
                style={{ ...styles.openButton }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  setScanned(false);
                }}
              >
                <Text style={styles.textStyle}>Tentar Novamente</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <Modal
          animationType="fade"
          transparent={true}
          visible={loadVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}>
          <View style={styles.centeredView}>
            <LottieView
              autoPlay
              loop
              style={{
                width: '40%'
              }}
              source={require('./../../assets/lottie/lottie-beer.json')}
            />
          </View>
        </Modal>

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
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanner}
            style={styles.scanner}
          />
        </View>

        <BottomBar userInfo={userInfo} />

      </View>
    </>
  );
}
