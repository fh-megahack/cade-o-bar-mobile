import React, { useState } from 'react';
import styles from './styles'
import { Text, View, TextInput, TouchableOpacity, YellowBox, SafeAreaView, KeyboardAvoidingView, Platform, Modal, TouchableHighlight } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { AirbnbRating } from 'react-native-ratings';
import { AntDesign, Feather as Icon } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import api from '../../services/api';

YellowBox.ignoreWarnings([
  'Animated: `useNativeDriver` was not specified.',
]);

interface Params {
  userId: number
  barId: number
}

export default function CheckOut() {
  const route = useRoute()
  const navigation = useNavigation()

  const { userId, barId } = route.params as Params

  const [rating, setRating] = useState<Number>(3);
  const [comment, setComment] = useState<string>('');
  const [modalSuccessVisible, setModalSuccessVisible] = useState(false);
  const [modalExitVisible, setModalExitVisible] = useState(false);

  function ratingCompleted(rating: number) {
    setRating(rating)
  }

  function handleSubmitRating() {
    if (comment) {
      const object = {
        bar_id: barId,
        user_id: userId,
        rating,
        comment
      }
      api.post('rating', object).then((result) => {
        setModalSuccessVisible(true)
        setTimeout(() => {
          setModalSuccessVisible(false)
          navigation.navigate('Home')
        }, 2000)
      }).catch((error) => {
        navigation.navigate('Home')
      })
    } else {
      setModalExitVisible(true)
    }
  }

  function handleNavigationBack() {
    navigation.goBack()
  }

  function handleExit() {
    navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleNavigationBack} style={styles.header}>
        <AntDesign name='arrowleft' size={24} color='#fff' style={styles.headerIcon} />
        <Text style={styles.headerText}>Check-Out</Text>
      </TouchableOpacity>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalSuccessVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTextHead}>Obrigado pelo feedback!</Text>
            <Text style={{ ...styles.modalText, marginBottom: 10 }}>Você ganhou mais <Text style={styles.modalTextPoint}>20</Text> pontos!</Text>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalExitVisible}>
        <View style={styles.centeredView}>
          <View style={{ ...styles.modalView, width: 300 }}>
            <Text style={styles.modalText}>Deseja mesmo sair sem deixar sua avaliação? </Text>
            <View style={styles.modalButtons}>

              <TouchableHighlight
                style={{ ...styles.buttonCancel }}
                onPress={() => {
                  setModalExitVisible(false);
                }}
              >
                <Text style={{ ...styles.textStyle, color: '#577590' }}>Cancelar</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={{ ...styles.openButton }}
                onPress={handleExit}
              >
                <Text style={styles.textStyle}>Sair</Text>
              </TouchableHighlight>
            </View></View>
        </View>
      </Modal>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={{ flex: 1, width: '100%' }}
      >
        <View style={styles.containerBottom}>
          <ScrollView style={{ width: '100%' }}>
            <View style={styles.content}>

              <View style={{ marginTop: 20 }}>
                <MaterialCommunityIcons name="exit-run" color="#FFF" size={100} />
              </View>

              <Text style={styles.textExit}>Você está prestes a sair</Text>

              <Text style={styles.textDescription}>Antes de fazer o Check-out, que tal avaliar a sua experiencia?</Text>

              <View style={{ marginTop: 10, flex: 1 }}>
                <AirbnbRating
                  onFinishRating={ratingCompleted}
                />
              </View>

              <View style={styles.action}>
                <TextInput
                  placeholder="Deixe seu comentário..."
                  placeholderTextColor="#808080"
                  onChangeText={setComment}
                  style={styles.textInput}
                  autoCapitalize="none"
                  autoCorrect={false}
                />
              </View>
              <View style={styles.sectionBottom}>

                <TouchableOpacity style={styles.button} onPress={handleSubmitRating}>
                  <MaterialCommunityIcons style={{ marginLeft: 30 }} name="location-exit" color="#FFF" size={30} />
                  <Text style={styles.buttonText}>Fazer Check-out</Text>
                </TouchableOpacity>
              </View>
            </View>

          </ScrollView>

        </View>
      </KeyboardAvoidingView>

    </View>
  );
};