import React, { useState, useEffect } from 'react';
import styles from './styles'
import { Text, View, Image, TouchableOpacity, Modal, TouchableHighlight } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { AntDesign as Icon } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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

interface Params {
  userId: number
  barInfo: Bar
}

export default function Roulette() {
  const navigation = useNavigation()
  const route = useRoute()

  const { userId, barInfo } = route.params as Params

  console.log('---------------', barInfo)
  const images = [
    require('../../assets/roleta/item-1.png'),
    require('../../assets/roleta/item-2.png'),
    require('../../assets/roleta/item-3.png'),
    require('../../assets/roleta/item-4.png'),
    require('../../assets/roleta/item-5.png')
  ]

  const [modalVisible, setModalVisible] = useState(false);
  const [item, setItem] = useState(images[0]);

  useEffect(() => {
    const number = Math.floor(5 * Math.random())
    setItem(images[number])
    setTimeout(() => { setModalVisible(true) }, 2000)
  }, [])

  function handleNavigateToDetails() {
    setModalVisible(false)
    navigation.navigate('Details', { barInfo, userId })
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Check-in Sucesso</Text>
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={{ ...styles.modalView, width: 300 }}>
            <Text style={{ ...styles.modalTextHead }}>Você ganhou</Text>
            <Image
              source={item}
              style={modalVisible ? styles.roulleteAnimation : styles.roulleteAnimationHidden}
            />
            <TouchableHighlight
              style={{ ...styles.openButton }}
              onPress={handleNavigateToDetails}
            >
              <Text style={styles.textStyle}>Resgatar</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <View style={styles.containerBottom}>
        <View style={styles.bottomTitle}>
          <Image
            source={require('../../assets/roleta/roulette.png')}
          />
          <Text style={styles.textRoulette0}>Ganhe Brindes!</Text>
          <Text style={styles.textRoulette1}>Concorra a brindes e descontos para poder usar neste estabelecimento!</Text>
        </View>


        <View style={styles.sectionMiddle}>
          <Image
            source={require('../../assets/roleta/rouletteGif.gif')}
            style={!modalVisible ? styles.roulleteAnimation : styles.roulleteAnimationHidden}
          />
          <Image
            source={item}
            style={modalVisible ? styles.roulleteAnimation : styles.roulleteAnimationHidden}
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