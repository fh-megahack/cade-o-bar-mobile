import React from 'react';

import { Text, View, TouchableOpacity, Image, Animated, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { AntDesign, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';

import HomeStars from '../../components/HomeStars/index'

import styles from './styles'

export default function Rota() {

  const translateY = new Animated.Value(0)

  const navigation = useNavigation();

  function handleNavigateToCheckOut() {
    navigation.navigate('CheckOut')
  }

  return (
    <>
    <SafeAreaView>
      <ScrollView>
    
    <View style={styles.container}>

      <View style={styles.header}>

        <View style={styles.topNav}>
          <Text style={styles.textTop}>Detalhes</Text>
        </View>

        <View style={styles.barHeader}>
          <View style={styles.barHeaderContainer}>
            <View style={styles.heartView}>
              <TouchableOpacity style={styles.heartButton}>
                <AntDesign style={styles.heart} name="heart" size={35} color="red" />
              </TouchableOpacity>
            </View>
            <Image style={styles.barHeaderImage} source={require('../../assets/home/barDoZe.png')} />
            
            <View style={styles.barInfos}>
              <View>
                <Text style={styles.barHeaderTitle}>Bar do Pedro</Text>
              </View>
              <View style={styles.rating}>
                <Text style={styles.infoText}>Descobertas</Text>

                <Text style={styles.infoText}>Avaliação</Text>
              </View>
              <View style={styles.counter}>
                <View style={styles.counterInfo}>
                  <MaterialCommunityIcons name="account-group" color="#FFCE39" size={30}/>
                  <Text style={styles.counterInfoText}>153</Text>
                </View>

                <View style={styles.counterInfo}>
                  <AntDesign name="star" color="#FFCE39" size={30}/>
                  <Text style={styles.counterInfoText}>4.8</Text>
                </View>
              </View>

            </View>
          </View>
        </View>
      </View>
        <View style={styles.containerMain}>
          <View style={styles.barLinks}>

            <View style={styles.barLocation}>
              <Entypo name="location" color="#F08A4B" size={18} />
              <Text style={styles.barLocationText}>Rua Bonita, 111 - Vila Madalena, SP</Text>
            </View>

            <View style={styles.barLink}>
              <Entypo name="link" color="#F08A4B" size={18} />
              <Text style={styles.barLinkText}>www.bardoze.com.br</Text>

            </View>
          </View>

            <View style={styles.homeStars}>
              <Text style={styles.homeStarsText}>Estrelas da casa</Text>
              <HomeStars translateY={translateY} />
            </View>

            <View style={styles.favorites}>

            <View style={styles.favoritesTitle}>
              <Text style={styles.favoritesText}>Avaliações</Text>
              <Text style={styles.seeMore}>Ver Todas</Text>
            </View>

              <View style={styles.favoritesCard}>
                <View style={styles.favoritesCardHeader}>
                  <Image style={styles.favoritesImage} source={require('../../assets/details/andreProfiles.jpg')} />
                  <Text style={styles.favoritesName}>André Fuzi</Text>
                </View>
                <View style={styles.favoritesCardFooter}>
                  <Text style={styles.favoritesCardComment}>Um ótimo lugar, vale super a pena visitar...</Text>
                </View>
              </View>
            </View>
        </View>
      
          <View style={styles.checkOut}>
            <TouchableOpacity style={styles.checkOutButton} onPress={handleNavigateToCheckOut}>
              <Text style={styles.textButton}>Fazer Check-Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
    
      </>
  );
}
