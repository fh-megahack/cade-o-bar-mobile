import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler'
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

  function handleSelectItem() {

  }

  function handleRescuePoints() {

  }

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <TouchableOpacity onPress={handleNavigationBack} style={styles.header}>
          <Icon name='arrowleft' size={24} color='#fff' style={styles.headerIcon} />
          <Text style={styles.headerText}>Perfil</Text>
        </TouchableOpacity>
        <ScrollView>
          <View style={styles.content}>
            <View style={styles.userAvatarContainer}>
              <Image style={styles.userAvatar} source={require('./../../assets/users/pedro.jpeg')} />
            </View>
            <Text style={styles.userName}>Pedro</Text>
            <Text style={styles.userLocation}>São Paulo, SP</Text>
            <View style={styles.userBoard}>
              <View style={styles.userBoardColumn}>
                <Text style={styles.userInfoTitle}>Descobertas</Text>
                <Text style={styles.userInfoContent}>17</Text>
              </View>
              <View style={styles.userBoardColumn}>
                <Text style={styles.userInfoTitle}>Pontuação</Text>
                <Text style={styles.userInfoContent}>1668</Text>
              </View>
            </View>
            <View style={styles.separator} /> 
            <View style={styles.rescueContent}>
              <Text style={styles.rescueText}>Você sabia que no aplicativo “Cadê o Bar?” da para trocar seus pontos em cupons de desconto?</Text>
              <View style={styles.rescueHead}>
                <Text style={styles.rescueTitle}>Pontos para Resgate</Text>
                <Text style={styles.rescuePoints}>590</Text>
              </View>
              <TouchableOpacity onPress={handleRescuePoints} style={styles.rescueBtn}>
                <Text style={styles.rescueBtnText}>Quero Desconto!</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.sectionTitle}>Últimas Descobertas</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 20 }} style={styles.slider}>
              <TouchableOpacity
                style={styles.item}
                activeOpacity={0.7}
                onPress={() => { handleSelectItem() }}>
                <Image width={42} height={42} source={require('./../../assets/bares/bar-do-matheus.jpeg')} style={styles.itemImg} />
                <Text style={styles.itemTitle}>Pipoca`s Bar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.item}
                activeOpacity={0.7}
                onPress={() => { handleSelectItem() }}>
                <Image width={42} height={42} source={require('./../../assets/bares/bar-do-matheus.jpeg')} style={styles.itemImg} />
                <Text style={styles.itemTitle}>Pipoca`s Bar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.item}
                activeOpacity={0.7}
                onPress={() => { handleSelectItem() }}>
                <Image width={42} height={42} source={require('./../../assets/bares/bar-do-matheus.jpeg')} style={styles.itemImg} />
                <Text style={styles.itemTitle}>Pipoca`s Bar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.item}
                activeOpacity={0.7}
                onPress={() => { handleSelectItem() }}>
                <Image width={42} height={42} source={require('./../../assets/bares/bar-do-matheus.jpeg')} style={styles.itemImg} />
                <Text style={styles.itemTitle}>Pipoca`s Bar</Text>
              </TouchableOpacity>
            </ScrollView>
            <View style={styles.separator} />
            <Text style={styles.sectionTitle}>Favoritos</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 20 }}>
              <TouchableOpacity
                style={styles.item}
                activeOpacity={0.7}
                onPress={() => { handleSelectItem() }}>
                <Image width={42} height={42} source={require('./../../assets/bares/bar-do-matheus.jpeg')} style={styles.itemImg} />
                <Text style={styles.itemTitle}>Pipoca`s Bar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.item}
                activeOpacity={0.7}
                onPress={() => { handleSelectItem() }}>
                <Image width={42} height={42} source={require('./../../assets/bares/bar-do-matheus.jpeg')} style={styles.itemImg} />
                <Text style={styles.itemTitle}>Pipoca`s Bar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.item}
                activeOpacity={0.7}
                onPress={() => { handleSelectItem() }}>
                <Image width={42} height={42} source={require('./../../assets/bares/bar-do-matheus.jpeg')} style={styles.itemImg} />
                <Text style={styles.itemTitle}>Pipoca`s Bar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.item}
                activeOpacity={0.7}
                onPress={() => { handleSelectItem() }}>
                <Image width={42} height={42} source={require('./../../assets/bares/bar-do-matheus.jpeg')} style={styles.itemImg} />
                <Text style={styles.itemTitle}>Pipoca`s Bar</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <BottomBar />
      </View>
    </>
  );
}