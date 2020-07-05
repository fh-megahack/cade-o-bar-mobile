import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'
import { AntDesign as Icon } from '@expo/vector-icons';
import api from '../../services/api';


import styles from './styles'
import BottomBar from '../../components/Navigator';

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

interface Favorite {
  id: number
  user_id: number
  bar_id: number
  bar_name: string
  bar_image: string
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

export default function User() {
  const route = useRoute()
  const navigation = useNavigation()

  const { userInfo } = route.params as Params

  const [point, setPoint] = useState<Point>({} as Point)
  const [favorites, setFavorites] = useState<Favorite[]>([])
  const [discoveries, setDiscoveries] = useState<Discovery[]>([])

  function handleNavigationBack() {
    navigation.goBack()
  }

  useEffect(() => {
    api.get(`points/${userInfo.id}`).then((resp) => {
      if (resp && resp.data) {
        setPoint(resp.data)
      }
    })
  }, [])

  useEffect(() => {
    api.get(`favorite/${userInfo.id}`).then((resp) => {
      if (resp && resp.data) {
        setFavorites(resp.data)
      }
    })
  }, [])

  useEffect(() => {
    api.get(`discovery/${userInfo.id}`).then((resp) => {
      if (resp && resp.data) {
        setDiscoveries(resp.data)
      }
    })
  }, [])

  function handleRescuePoints() {
    navigation.navigate('Discount', { user_point: point })
  }

  function handleBarClick(bar_id: number) {
    navigation.navigate('MapDetail', { bar_id })
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
              <Image style={styles.userAvatar} source={{ uri: userInfo.url_image }} />
            </View>
            <Text style={styles.userName}>{userInfo.name}</Text>
            <Text style={styles.userLocation}>{userInfo.city}, {userInfo.uf}</Text>
            <View style={styles.userBoard}>
              <View style={styles.userBoardColumn}>
                <Text style={styles.userInfoTitle}>Descobertas</Text>
                <Text style={styles.userInfoContent}>17</Text>
              </View>
              <View style={styles.userBoardColumn}>
                <Text style={styles.userInfoTitle}>Pontuação</Text>
                <Text style={styles.userInfoContent}>{point.total_points}</Text>
              </View>
            </View>
            <View style={styles.separator} />
            <View style={styles.rescueContent}>
              <Text style={styles.rescueText}>Você sabia que no aplicativo “Cadê o Bar?” da para trocar seus pontos em cupons de desconto?</Text>
              <View style={styles.rescueHead}>
                <Text style={styles.rescueTitle}>Pontos para Resgate</Text>
                <Text style={styles.rescuePoints}>{point.rescue_points}</Text>
              </View>
              <TouchableOpacity onPress={handleRescuePoints} style={styles.rescueBtn}>
                <Text style={styles.rescueBtnText}>Quero Desconto!</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.sectionTitle}>Últimas Descobertas</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 20 }} style={styles.slider}>
              {favorites.map((fav) => (
                <TouchableOpacity
                  key={fav.id}
                  style={styles.item}
                  activeOpacity={0.7}
                  onPress={() => { handleBarClick(fav.bar_id) }}>
                  <Image width={42} height={42} source={{ uri: fav.bar_image }} style={styles.itemImg} />
                  <Text style={styles.itemTitle}>{fav.bar_name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <View style={styles.separator} />
            <Text style={styles.sectionTitle}>Favoritos</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 20 }}>
              {discoveries.map((disc) => (
                <TouchableOpacity
                  key={disc.id}
                  style={styles.item}
                  activeOpacity={0.7}
                  onPress={() => { handleBarClick(disc.bar_id) }}>
                  <Image width={42} height={42} source={{ uri: disc.bar_image }} style={styles.itemImg} />
                  <Text style={styles.itemTitle}>{disc.bar_name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <BottomBar userInfo={userInfo} />
      </View>
    </>
  );
}