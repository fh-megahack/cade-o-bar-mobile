import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign as Icon } from '@expo/vector-icons';

import BottomBar from '../../components/Navigator';
import api from '../../services/api';

import styles from './styles'

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
interface Rank {
  id: number
  user_id: number
  total_points: number
  rescue_points: number
  user_name: string
  user_image: string
}
interface Params {
  userInfo: User
}

export default function Rank() {
  const navigation = useNavigation()
  const route = useRoute()

  const { userInfo } = route.params as Params

  const [userPoint, setUserPoint] = useState<Point>({} as Point)
  const [rank, setRank] = useState<Rank[]>([])

  useEffect(() => {
    api.get(`points/${userInfo.id}`).then((resp) => {
      if (resp && resp.data) {
        setUserPoint(resp.data)
      }
    })
  }, [])

  useEffect(() => {
    api.get('points').then((resp) => {
      if (resp && resp.data) {
        setRank(resp.data)
      }
    })
  }, [])

  function handleNavigationBack() {
    navigation.goBack()
  }

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <View style={styles.container}>

        <TouchableOpacity onPress={handleNavigationBack} style={styles.header}>
          <Icon name='arrowleft' size={24} color='#F3CA40' style={styles.headerIcon} />
          <Text style={styles.headerText}>Rank</Text>
        </TouchableOpacity>

        <View style={styles.userBox}>
          <LinearGradient colors={['#F3CA40', '#F2AA46']} style={styles.rankBox}>
            <View style={styles.rankTop}>
              <Text style={styles.topTitle}>Sua Classificação</Text>
              <View style={styles.rankTop2}>
                <Text style={styles.rankTop1}>{userPoint.total_points}</Text>
                <Text style={styles.rankTop3}>+</Text>
              </View>
            </View>
            <View style={styles.rankBottom}>
              <Text style={styles.rankBottomPosition}>{userPoint.position}</Text>
              <Image style={styles.userAvatar} source={{ uri: userInfo.url_image }} />
              <Text style={styles.nameUserRank}>{userInfo.name}</Text>
            </View>

          </LinearGradient>
        </View>

        <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
          <View style={styles.containerBottom}>
            {rank.map((user, index) => (
              <View style={styles.rankItem} key={user.id}>
                <View style={styles.rankBadge}>
                  {index === 0 && (<Image source={require('./../../assets/rank/medalgold.png')} />)}
                  {index === 1 && (<Image source={require('./../../assets/rank/medalsilver.png')} />)}
                  {index === 2 && (<Image source={require('./../../assets/rank/medalbronze.png')} />)}
                  {index > 2 && (<Text style={styles.rankPositionText}>{index + 1}</Text>)}
                </View>
                <View style={styles.rankUserInfo}>
                  <View style={styles.userRankNumber}>
                    <Image style={styles.userAvatar} source={{ uri: user.user_image }} />
                    <Text style={styles.userRankName}>{user.user_name}</Text>
                  </View>
                  <View style={styles.userRankNumber}>
                    <Text style={styles.userRankPoints}>{user.total_points}</Text>
                    <Text style={styles.userRankAdd}>+</Text></View>
                </View>
              </View>
            ))}
          </View>
          <View style={styles.space} />
        </ScrollView>

      </View >
      <View>
        <BottomBar userInfo={userInfo} />
      </View>
    </>
  );
};

