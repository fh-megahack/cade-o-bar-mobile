import React from 'react';
import MapView, { Marker } from 'react-native-maps'
import { useNavigation } from '@react-navigation/native';
import { StatusBar, View, Image, Text } from 'react-native';
import * as Location from 'expo-location';
import api from '../../services/api';

// Estilos
import styles from './styles'
import BottomBar from '../../components/Navigator';

export default function Home() {

  const navigation = useNavigation();

  function handleNavigateToMapDetail() {
    navigation.navigate('MapDetail')
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>

        <View style={styles.header}>
          <Image style={styles.profileImage} source={require('../../assets/home/profilePedro.png')} />
          <View>
            <Text style={styles.welcomeText}>Olá <Text style={styles.welcomeTextName}>Pedro</Text>,</Text>
            <Text style={styles.welcomeText}>Que tal descobrir novas experiências hoje? </Text>
          </View>
        </View>


        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: -23.554274,
              longitude:  -46.691852,
              latitudeDelta: 0.014,
              longitudeDelta: 0.014,
            }}
          >

            <Marker
              onPress={handleNavigateToMapDetail}
              style={styles.mapMarker}
              coordinate={{
                latitude: -23.559738, 
                longitude: -46.692658,
              }}>
              <View style={styles.mapMarkerContainer}>
                <Image style={styles.mapMarkerImage} source={require('../../assets/home/barDoZe.png')} />
                <Text style={styles.mapMarkerTitle}>Bar 1</Text>
              </View>
            </Marker>
            
          </MapView>
        </View>

        <BottomBar />

      </View>
    </>
  );
}