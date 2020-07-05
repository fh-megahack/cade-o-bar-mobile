import React, { useState, useEffect } from 'react';
import styles from './styles'
import { Text, View, Image, TouchableOpacity, StatusBar, Modal, TouchableHighlight } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { AntDesign as Icon } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import LottieView from "lottie-react-native";

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
  points: Point
}

interface ProductDescription {
  name: string
  url_image: string
}

interface RatingFull {
  id: number
  bar_id: number
  user_id: number
  rating: number
  comment: string
  user_name: string
  user_image: string
}

interface Bar {
  id: number
  name: string
  latitude: number
  longitude: number
  street: string
  address_number: number
  neighborhood: string
  uf: string
  city: string
  website: string
  url_image: string
  phone: number
  products: ProductDescription[]
  ratings: RatingFull[]
}

interface Point {
  user_id: number
  total_points: number
  rescue_points: number
}

interface Params {
  userInfo: User
  barInfo: Bar
}
export default function CheckInSuccess() {
  const navigation = useNavigation();
  const route = useRoute()

  const { userInfo, barInfo } = route.params as Params

  const checkinPoint = 50
  const [exitModalVisible, setExitModalVisible] = useState(false);
  const [pointModalVisible, setPointModalVisible] = useState(false);
  const [totalPoints, setTotalPoints] = useState(userInfo.points.total_points);
  const [rescuePoints, setRescuePoints] = useState(userInfo.points.rescue_points);

  useEffect(() => {
    const options = {
      "user_id": userInfo.id,
      "total_points": userInfo.points.total_points + checkinPoint,
      "rescue_points": userInfo.points.rescue_points + checkinPoint
    }
    api.put('points', options).then((result) => {
      setTotalPoints(result.data.total_points)
      setRescuePoints(result.data.rescue_points)
      setPointModalVisible(true)
      setTimeout(function () {
        setPointModalVisible(false)
      }, 3000)
    })
  }, [])

  function handleNavigationBack() {
    setExitModalVisible(true)
  }

  function handleCancel() {
    navigation.navigate('Detail', { userId: userInfo.id, barInfo })
  }

  function handleNavigateToRoullete() {
    navigation.navigate('Roullete', { userInfo, barInfo })
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <Modal
        animationType="fade"
        transparent={true}
        visible={pointModalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTextHead}>Parabéns!</Text>
            <Text style={styles.modalText}>você ganhou mais <Text style={styles.modalTextPoint}>{checkinPoint}</Text> pontos!</Text>
            <Text style={{ ...styles.modalText, marginBottom: 10 }}>Agora você tem:</Text>
            <Text style={styles.modalText}><Text style={{ ...styles.modalTextPoint, color: '#577590' }}>{totalPoints}</Text> pontos no Rank</Text>
            <Text style={styles.modalText}><Text style={{ ...styles.modalTextPoint, color: '#577590' }}>{rescuePoints}</Text> pontos para resgate!</Text>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="fade"
        transparent={true}
        visible={exitModalVisible}>
        <View style={styles.centeredView}>
          <View style={{ ...styles.modalView, width: 300 }}>
            <Text style={styles.modalText}>Deseja mesmo sair sem tentar sua sorte na roleta? </Text>
            <View style={styles.modalButtons}>

              <TouchableHighlight
                style={{ ...styles.buttonCancel }}
                onPress={() => {
                  setExitModalVisible(!exitModalVisible);
                }}
              >
                <Text style={{ ...styles.textStyle, color: '#577590' }}>Cancelar</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={{ ...styles.openButton }}
                onPress={handleCancel}
              >
                <Text style={styles.textStyle}>Sair</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleNavigationBack} style={styles.header}>
          <Icon name='arrowleft' size={24} color='#fff' style={styles.headerIcon} />
          <Text style={styles.headerText}>Check-in Sucesso</Text>
        </TouchableOpacity>

        <View style={styles.containerBottom}>
          <View style={styles.sectionTop}>
            <LottieView
              autoPlay
              loop={false}
              style={{
                width: '40%'
              }}
              source={require('./../../assets/lottie/lottie-checkin.json')}
            />
            <Text style={styles.textCheck0}>Check-in Realizado com Sucesso!</Text>

            <Text style={styles.textCheck2}>Comece sua descobertas nesse ambiente!</Text>
          </View>

          <View style={styles.sectionBottom}>
            <Text style={styles.textCheck3}>Você tem direito a uma rodada da sorte, clique no botão abaixo e receba um mimo!</Text>
            <TouchableOpacity onPress={handleNavigateToRoullete}>
              <LottieView
                autoPlay
                loop={true}
                style={{
                  width: '40%'
                }}
                source={require('./../../assets/lottie/lottie-play.json')}
              />
            </TouchableOpacity>
          </View>

        </View>

      </View>
    </>
  );
}