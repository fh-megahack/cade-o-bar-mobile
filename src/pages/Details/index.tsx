import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image, Animated, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { AntDesign, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';

import styles from './styles'

import api from '../../services/api'

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

export default function Rota() {
  const navigation = useNavigation();
  const route = useRoute()

  const { userId, barInfo } = route.params as Params

  const [discovery, setDiscovery] = useState<Number>(0);
  const [avRating, setAvRating] = useState<String>('')

  function handleNavigateToCheckOut() {
    navigation.navigate('CheckOut', { userId, barId: barInfo.id })
  }

  useEffect(() => {
    api.get(`discovery/bar/${barInfo.id}`).then(response => {
      if (response && response.data) {

        setDiscovery(response.data.length)
      }
    });
  }, []);

  useEffect(() => {

    if (barInfo.ratings && barInfo.ratings.length) {
      const average = barInfo.ratings.reduce((acc, el) => {
        return acc + el.rating
      }, 0)
      const result = (average / (barInfo.ratings.length)).toFixed(1)
      setAvRating(result)
    } else {
      setAvRating('--')
    }
  }, []);

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>{barInfo.name}</Text>
        </View>
        <ScrollView>

          <View style={styles.content}>
            <View style={styles.barContainer}>
              <View style={styles.barCenter}>
                <View style={styles.barContainerTop}>
                  <View style={styles.heartView}>
                    <TouchableOpacity style={styles.heartButton}>
                      <AntDesign name="heart" size={35} color="red" />
                    </TouchableOpacity>
                  </View>
                  <Image style={styles.barHeaderImage} source={{ uri: barInfo.url_image }} />
                </View>
                <View style={styles.barBoard}>
                  <View style={styles.barBoardColumn}>
                    <Text style={styles.barBoardTitle}>Visitantes</Text>
                    <View style={styles.counterInfo}>
                      <MaterialCommunityIcons name="account-group" color="#FFCE39" size={30} />
                      <Text style={styles.counterInfoText}>{discovery}</Text>
                    </View>
                  </View>
                  <View style={styles.barBoardColumn}>
                    <Text style={styles.barBoardTitle}>Avaliação</Text>
                    <View style={styles.counterInfo}>
                      <AntDesign name="star" color="#FFCE39" size={30} />
                      <Text style={styles.counterInfoText}>{avRating}</Text>
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
                <Text style={styles.barLocationText}>{barInfo.street}, {barInfo.address_number} - {barInfo.neighborhood}, {barInfo.uf}</Text>
              </View>

              <View style={styles.barLink}>
                <Entypo name="link" color="#F08A4B" size={18} />
                <Text style={styles.barLinkText}>{barInfo.website}</Text>

              </View>
            </View>

            <View style={styles.homeStars}>
              <Text style={styles.sectionTitle}>Estrelas da casa</Text>

              <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 10 }} style={styles.slider}>
                {barInfo.products.map((product, index) => (
                  <View
                    key={String(index)}>
                    <Image width={42} height={42} source={{ uri: product.url_image }} style={styles.itemImg} />
                    <Text style={styles.itemTitle}>{product.name}</Text>
                  </View>
                ))}
              </ScrollView>
            </View>

            <View style={styles.favorites}>
              <View style={styles.favoritesTitle}>
                <Text style={styles.sectionTitle}>Avaliações</Text>
                <Text style={styles.seeMore}>Ver Todas</Text>
              </View>

              {barInfo.ratings.map(rating => (
                <View
                  key={String(rating.id)}
                  style={styles.favoritesCard}
                >
                  <View style={styles.favoritesCardHeader}>
                    <Image style={styles.favoritesImage} source={{ uri: rating.user_image }} />
                    <Text style={styles.favoritesName}>{rating.user_name}</Text>
                  </View>
                  <View style={styles.favoritesCardFooter}>
                    <Text numberOfLines={1} style={styles.favoritesCardComment}>{rating.comment}</Text>
                  </View>
                </View>
              ))}
            </View>
            <View style={styles.spaceBottom} />
          </View>

        </ScrollView>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.checkOutButton} onPress={handleNavigateToCheckOut}>
          <Text style={styles.textButton}>Fazer Check-Out</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
