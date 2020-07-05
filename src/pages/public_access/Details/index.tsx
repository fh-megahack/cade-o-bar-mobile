import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, Image, Animated, SafeAreaView, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar'
import { useNavigation, useRoute } from '@react-navigation/native';
import { AntDesign, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import api from '../../../services/api'
import styles from './styles'

import BottomBar from '../../../components/Navigator';


interface Params {
  barInfo: Bar
  userInfo: User
}

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

interface Bar {
  id: number
  name: string;
  street: string;
  address_number: number;
  neighborhood: string;
  city: string;
  uf: string;
  url_image: string;
  website: string;
  ratings: Rating[]
  products: Product[]
}

interface Rating {
  id: number;
  user_name: string;
  comment: string;
  user_image: string;
  rating: number;
}

interface Product {
  id: number;
  name: string;
  url_image: string;
}


export default function Rota() {

  function handleSelectItem() {

  }
  const [discovery, setDiscovery] = useState<Number>(0);
  const [avRating, setAvRating] = useState<String>('-')

  const navigation = useNavigation();
  const route = useRoute();

  function handleNavigationBack() {
    navigation.goBack()
  }

  const emptyBlock = (text: string) => {
    return (
      <Text style={styles.epmtyBlock}>Não temos {text} até o momento</Text>
    )
  }

  const { barInfo, userInfo } = route.params as Params;

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

  if (!barInfo) {
    return null;
  }

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <TouchableOpacity onPress={handleNavigationBack} style={styles.header}>
          <AntDesign name='arrowleft' size={24} color='#fff' style={styles.headerIcon} />
          <Text style={styles.headerText}>{barInfo.name}</Text>
        </TouchableOpacity>
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
              <Text style={{ ...styles.sectionTitle, paddingHorizontal: 20 }}>Estrelas da casa</Text>

              {barInfo.products && barInfo.products.length ?
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 10 }} style={styles.slider}>
                  {barInfo.products && barInfo.products.length && barInfo.products.map((product, index) => (
                    <View
                      key={String(index)}>
                      <Image width={42} height={42} source={{ uri: product.url_image }} style={styles.itemImg} />
                      <Text style={styles.itemTitle}>{product.name}</Text>
                    </View>
                  ))}
                </ScrollView>
                : emptyBlock('nenhum produto')}
            </View>

            <View style={styles.favorites}>
              <View style={styles.favoritesTitle}>
                <Text style={styles.sectionTitle}>Avaliações</Text>
                <Text style={styles.seeMore}>Ver Todas</Text>
              </View>

              {(barInfo.ratings && barInfo.ratings.length) ? barInfo.ratings.map(rating => (
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
              )) : emptyBlock('nenhuma avaliação')}

            </View>
            <View style={styles.spaceBottom} />
          </View>

        </ScrollView>
      </View>
      <View style={styles.footer}>
        <BottomBar userInfo={userInfo} />
      </View>
    </>
  );
}
