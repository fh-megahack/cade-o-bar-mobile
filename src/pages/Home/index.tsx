import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps'
import { useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar, View, Image, Text, Alert } from 'react-native';
import * as Location from 'expo-location';
import api from '../../services/api';

// Estilos
import styles from './styles'
import BottomBar from '../../components/Navigator';


interface Bar {
  id: number;
  url_image: string;
  name: string;
  latitude: number;
  longitude: number;
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

interface Params {
  userInfo: User
}

export default function Home() {
  const [bars, setBars] = useState<Bar[]>([]);
  const [initialPosition, setInitialPosition] = useState<[number, number]>([0, 0]);

  const route = useRoute()
  const navigation = useNavigation()

  const { userInfo } = route.params as Params
  useEffect(() => {
    async function loadPosition() {
      const { status } = await Location.requestPermissionsAsync();

      if (status !== 'granted') {
        Alert.alert('Atenção', 'Precisamos de permissão para obter a sua localização');
        return;
      }

      const location = await Location.getCurrentPositionAsync();

      const { latitude, longitude } = location.coords;

      setInitialPosition([latitude, longitude])
    }

    loadPosition();
  }, [])

  useEffect(() => {
    api.get('bars').then(response => {
      setBars(response.data);
    })
  }, []);

  function handleNavigateToMapDetail(id: number) {
    api.get(`bars/${id}`).then(response => {
      if (response && response.data) {
        navigation.navigate('MapDetail', { barInfo: response.data, userInfo })
      }
    });
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>

        <View style={styles.header}>
          <Image style={styles.profileImage} source={{ uri: userInfo.url_image }} />
          <View>
            <Text style={styles.welcomeText}>Olá <Text style={styles.welcomeTextName}>{userInfo.name}</Text>,</Text>
            <Text style={styles.welcomeText}>Que tal descobrir novas experiências hoje? </Text>
          </View>
        </View>


        <View style={styles.mapContainer}>
          {initialPosition[0] !== 0 && (
            <MapView
              style={styles.map}
              loadingEnabled={initialPosition[0] === 0}
              initialRegion={{
                latitude: -23.554970,
                longitude: -46.692243,
                latitudeDelta: 0.006,
                longitudeDelta: 0.006,
              }}
            >
              <Marker
                coordinate={{
                  latitude: -23.554970,
                  longitude: -46.692243,
                }}>
              </Marker>
              {bars.map(bar => (
                <Marker
                  key={String(bar.id)}
                  onPress={() => handleNavigateToMapDetail(bar.id)}
                  style={styles.mapMarker}
                  coordinate={{
                    latitude: bar.latitude,
                    longitude: bar.longitude,
                  }}>
                  <View style={styles.mapMarkerContainer}>
                    <Image style={styles.mapMarkerImage} source={{ uri: bar.url_image }} />
                    <Text style={styles.mapMarkerTitle}>{bar.name}</Text>
                  </View>
                  <View style={styles.markerPoint} />
                </Marker>
              ))}
            </MapView>
          )}
        </View>

        <BottomBar userInfo={userInfo} />

      </View>
    </>
  );
}