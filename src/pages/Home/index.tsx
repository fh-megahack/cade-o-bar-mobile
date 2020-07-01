import React from 'react';
import MapView, {Marker} from 'react-native-maps'
import { SafeAreaView, View, Image, Text } from 'react-native';

// Estilos
import styles from './styles'
import BottomBar from '../../components/Navigator';

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>

        <View style={styles.header}>
          <Image style={styles.profileImage} source={require('../../assets/home/profilePedro.png') }/>
          <View>
            <Text style={styles.welcomeText}>Olá <Text style={styles.welcomeTextName}>Pedro</Text>,</Text> 
            <Text style={styles.welcomeText}>Que tal descobrir novas experiencias hoje? </Text>
          </View>
        </View>


        <View style={styles.mapContainer}>
                <MapView
                  style={styles.map}
                  initialRegion={{
                    latitude: -23.620960, 
                    longitude: -46.698819,
                    latitudeDelta: 0.014,
                    longitudeDelta: 0.014,
              }}
              >
                  <Marker
                    style={styles.mapMarker}
                    coordinate={{
                      latitude: -23.620960, 
                      longitude: -46.698819,
                    }}>
                      <View style={styles.mapMarkerContainer}>
                        <Image style={styles.mapMarkerImage} source={require('../../assets/home/barDoZe.png') }/>
                        <Text style={styles.mapMarkerTitle}>Bar do Zé</Text>
                      </View>
                  </Marker>

                  <Marker
                    style={styles.mapMarker}
                    coordinate={{
                      latitude: -23.626945,
                      longitude: -46.692290,
                    }}>
                      <View style={styles.mapMarkerContainer}>
                        <Image style={styles.mapMarkerImage} source={require('../../assets/home/barDoPedro.png') }/>
                        <Text style={styles.mapMarkerTitle}>Bar do Pedro</Text>
                      </View>
                  </Marker>

                  <Marker
                    style={styles.mapMarker}
                    coordinate={{
                      latitude: -23.625401, 
                      longitude: -46.702139,
                    }}>
                      <View style={styles.mapMarkerContainer}>
                        <Image style={styles.mapMarkerImage} source={require('../../assets/home/barDoFuzi.png') }/>
                        <Text style={styles.mapMarkerTitle}>Bar do Fuzi</Text>
                      </View>
                  </Marker>

                  <Marker
                    style={styles.mapMarker}
                    coordinate={{
                      latitude: -23.614234, 
                      longitude: -46.691110,
                    }}>
                      <View style={styles.mapMarkerContainer}>
                        <Image style={styles.mapMarkerImage} source={require('../../assets/home/barDoMatheus.png') }/>
                        <Text style={styles.mapMarkerTitle}>Bar do Matheus</Text>
                      </View>
                  </Marker>
              </MapView>
        </View>

        <BottomBar />

      </View>
    </SafeAreaView>
  );
}