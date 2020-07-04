import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, Image, Animated, SafeAreaView, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar'
import { useNavigation, useRoute } from '@react-navigation/native';
import { AntDesign, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import api from '../../../services/api'
import styles from './styles'

interface Params {
  bar_id: number;
}

interface Bar {
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
  product_name: string;
  url_image: string;
}


export default function Rota() {

  function handleSelectItem() {

  }

  const [data, setData] = useState<Bar>({} as Bar);
  const [ratings, setRatings] = useState<Rating[]>([]);
  const [products, setProduct] = useState<Product[]>([]);
  const [discovery, setDiscovery] = useState<Number>(0);
  const [avRating, setAvRating] = useState<String>('')

  const navigation = useNavigation();
  const route = useRoute();

  function handleNavigationBack() {
    navigation.goBack()
  }

  const routeParam = route.params as Params;

  useEffect(() => {
    api.get(`bars/${routeParam.bar_id}`).then(response => {
      setData(response.data);
    });
  },[]);

  useEffect(() => {
    api.get(`rating/${routeParam.bar_id}`).then(response => {
      setRatings(response.data);
    });
  },[]);

  useEffect(() => {
    api.get(`product/${routeParam.bar_id}`).then(response => {
      setProduct(response.data);
    });
  },[]);

  useEffect(() => {
    api.get(`discovery/bar/${routeParam.bar_id}`).then(response => {
      if (response && response.data) {
        
        setDiscovery(response.data.length)
      }
    });
  },[]);

  useEffect(() => {
    const average = ratings.reduce((acc, el) => {
      return acc + el.rating
    }, 0)
    const result = (average/(ratings.length)).toFixed(1)
    setAvRating(result)
  },[ratings]);

  if (!data) {
    return null;
  }

  return (
    <>
    <StatusBar 
      backgroundColor="#f3ca40"
      style="light"
    />
    <SafeAreaView>
      <ScrollView>
    
    <View style={styles.container}>

      <View style={styles.header}>

        <View style={styles.topNav}>
          <TouchableOpacity onPress={handleNavigationBack} >
            <AntDesign name="arrowleft" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.textTop}>Detalhes</Text>
        </View>

        <View style={styles.barHeader}>
          <View style={styles.barHeaderContainer}>
            <View style={styles.heartView}>
              <TouchableOpacity style={styles.heartButton}>
                <AntDesign name="heart" size={35} color="red" />
              </TouchableOpacity>
            </View>
            <Image style={styles.barHeaderImage} source={{ uri: data.url_image }} />
            
            <View style={styles.barInfos}>
              <View>
                <Text style={styles.barHeaderTitle}>{data.name}</Text>
              </View>
              <View style={styles.rating}>
                <Text style={styles.infoText}>Descobertas</Text>

                <Text style={styles.infoText}>Avaliação</Text>
              </View>
              <View style={styles.counter}>
                <View style={styles.counterInfo}>
                  <MaterialCommunityIcons name="account-group" color="#FFCE39" size={30}/>
                  <Text style={styles.counterInfoText}>{discovery}</Text>
                </View>

                <View style={styles.counterInfo}>
                  <AntDesign name="star" color="#FFCE39" size={30}/>
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
              <Text style={styles.barLocationText}>{data.street}, {data.address_number} - {data.neighborhood}, {data.uf}</Text>
            </View>

            <View style={styles.barLink}>
              <Entypo name="link" color="#F08A4B" size={18} />
              <Text style={styles.barLinkText}>{data.website}</Text>
            </View>
          </View>

            <View style={styles.homeStars}>
              <Text style={styles.sectionTitle}>Estrelas da casa</Text>
              
              <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 10 }} style={styles.slider}>
              {products.map(product => (
                <TouchableOpacity
                  key={String(product.id)}
                  style={styles.item}
                  activeOpacity={0.7}
                  onPress={() => { handleSelectItem() }}>
                  <Image width={42} height={42} source={{ uri: product.url_image }} style={styles.itemImg} />
                  <Text style={styles.itemTitle}>{product.product_name}</Text>
                </TouchableOpacity>
              ))}
              </ScrollView>
            </View>

            <View style={styles.favorites}>

            <View style={styles.favoritesTitle}>
              <Text style={styles.favoritesText}>Avaliações</Text>
              <Text style={styles.seeMore}>Ver Todas</Text>
            </View>

            {ratings.map(rating => (
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
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
    
      </>
  );
}
