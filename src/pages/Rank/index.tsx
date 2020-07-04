import React, { useState } from 'react';
import styles from './styles'

import { FlatList, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient';

import { Feather as Icon } from '@expo/vector-icons';

import BottomBar from '../../components/Navigator';

export default function Rota() {
  const navigation = useNavigation()

  function handleNavigationBack() {
    navigation.goBack()
  }

  const[userRank, setUserRank] = useState([
    //database
    { name: 'Zé do Deli', category: 'Mestre', points: '9999', photo: require('./../../assets/rank/userZe.png'), id: '1' },
    { name: 'Pedro Augusto', category: 'Veterano', points: '1668', photo: require('./../../assets/rank/userpedro.png'), id: '2' },
    { name: 'Matheus Oliveira', category: 'Esforçado', points: '1480', photo: require('./../../assets/rank/userMatheus.png'), id: '3' },
    { name: 'André Fuzi', category: 'Calouro', points: '976', photo: require('./../../assets/rank/userAndre.png'), id: '4' },
    { name: 'Zé do Deli', category: 'Mestre', points: '9999', photo: require('./../../assets/rank/userZe.png'), id: '5' },
    { name: 'Pedro Augusto', category: 'Veterano', points: '1668', photo: require('./../../assets/rank/userpedro.png'), id: '6' },
    { name: 'Matheus Oliveira', category: 'Esforçado', points: '1480', photo: require('./../../assets/rank/userMatheus.png'), id: '7' },
    { name: 'André Fuzi', category: 'Calouro', points: '976', photo: require('./../../assets/rank/userAndre.png'), id: '8' }
  ])
  return (
    <>
    <View style={styles.container}>

      <View style={styles.containerTop}>
        <TouchableOpacity onPress={handleNavigationBack}>
          <Icon style={styles.arrowLeft} name="arrow-left" color="#FFF" size={30} />
        </TouchableOpacity>
        <Text style={styles.textTop}>Classificação</Text>
      </View>

      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>

        <View style={styles.containerBottom}>

          <LinearGradient colors={['#F3CA40', '#F2AA46']} style={styles.rankBox}>

            <View style={styles.rankTop}>
              <Text style={styles.rankTop1}>Sua Classificação</Text>
              <View style={styles.rankTop2}>
                <Text style={styles.rankTop1}>1668</Text>
                <Text style={styles.rankTop3}>+</Text>
              </View>
            </View>

            <View style={styles.rankBottom}>
              <Text style={styles.rankBottomPosition}>2</Text>
              <Image style={styles.userAvatar} source={require('./../../assets/rank/userpedro.png')} />
              
              <View style={styles.userRank}>
                <Text style={styles.nameUserRank}>Pedro Augusto</Text>
                <Text style={styles.categoryUserRank}>Veterano</Text>
              </View>
            </View>
            
          </LinearGradient>

        
          <View style={styles.listRank}>
            <View>
              <Image style={styles.medalGold} source={require('./../../assets/rank/medalgold.png')} />
              <Image style={styles.medalRank} source={require('./../../assets/rank/medalsilver.png')} />
              <Image style={styles.medalRank} source={require('./../../assets/rank/medalbronze.png')} />
            </View>
            <FlatList
              data={userRank}
              renderItem={({ item }) => (
                <View style={styles.userRankContainer}>
                  <Image style={styles.userAvatar} source={item.photo} />
                  <View style={styles.userRankData}>
                    <Text style={styles.userRankName}>{item.name}</Text>
                    <Text style={styles.userRankCategory}>{item.category}</Text>
                  </View>
                  <Text style={styles.userRankPoints}>{item.points}</Text>
                  <Text style={styles.userRankAdd}>+</Text>
                </View>
              )}
            />
            </View>
          </View>

      </ScrollView>

    </View >
    <View style={styles.footer}>
        <BottomBar />
    </View>
    </>
  );
};

