import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps'
import { useNavigation } from '@react-navigation/native';
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

export default function Home() {
  const [bars, setBars] = useState<Bar[]>([]);
  const [user, setUser] = useState<User>({} as User);
  const [initialPosition, setInitialPosition] = useState<[number, number]>([0, 0]);

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
    api.get('users/1').then(response => {
      setUser(response.data);
    })
  }, []);

  useEffect(() => {
    api.get('bars').then(response => {
      setBars(response.data);
    })
  }, []);

  const navigation = useNavigation();

  function handleNavigateToMapDetail(id: number) {
    navigation.navigate('MapDetail', { bar_id: id })
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>

        <View style={styles.header}>
          <Image style={styles.profileImage} source={{ uri: user.url_image }} />
          <View>
            <Text style={styles.welcomeText}>Olá <Text style={styles.welcomeTextName}>{user.name}</Text>,</Text>
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
                </Marker>
              ))}
            </MapView>
          )}
        </View>

        <BottomBar userInfo={user} />

      </View>
    </>
  );
}