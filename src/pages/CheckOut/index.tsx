import React from 'react';
import styles from './styles'
import { Text, View, TextInput, TouchableOpacity, YellowBox } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { AirbnbRating } from 'react-native-ratings';
import { Feather as Icon } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

YellowBox.ignoreWarnings([
  'Animated: `useNativeDriver` was not specified.',
]);

interface CheckOut {
  id: number;
  bar_id: number;
  user_id: number;
  rating: number;
  comment: string;
}

interface Params {
  barInfo: CheckOut
}

export default function CheckOut() {
  const route = useRoute()
  const navigation = useNavigation()

  const { barInfo } = route.params as Params


  function ratingCompleted(rating: number) {
    console.log("Rating is: " + rating)
  }

  function handleNavigateToHome() {
    navigation.navigate('Home')
  }

  function handleNavigateToDetails() {
    navigation.navigate('Details')
  }

  return (
    <View style={styles.container}>

      <View style={styles.containerTop}>
        <TouchableOpacity style={styles.arrowLeft} onPress={handleNavigateToDetails}>
          <Icon name="arrow-left" color="#FFF" size={30} />
        </TouchableOpacity>
        <Text style={styles.textTop}>Check-Out</Text>
      </View>


      <View style={styles.containerBottom}>  
        <View style={{marginTop: '10%'}}>
          <MaterialCommunityIcons name="exit-run" color="#FFF" size={100} />
        </View>
        
        <Text style={styles.textExit}>Você está prestes a sair</Text>

        <Text style={styles.textDescription}>Antes de fazer o Check-out, que tal avaliar a sua experiencia?</Text>
        
        <View style={{marginTop: '2%'}}>
          <AirbnbRating 
            onFinishRating={ratingCompleted}
          />
        </View>

        <View style={styles.action}>
          <TextInput 
            placeholder="Deixe seu comentário..."
            placeholderTextColor = "#808080"
            style={styles.textInput}
            autoCapitalize="none"
            autoCorrect={false}
          />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleNavigateToHome}>
        <MaterialCommunityIcons style={{ marginLeft: 30 }} name="location-exit" color="#FFF" size={30} />
        <Text style={styles.buttonText}>
          Fazer Check-out
        </Text>
      </TouchableOpacity>

      </View>
      

    </View>
  );
};