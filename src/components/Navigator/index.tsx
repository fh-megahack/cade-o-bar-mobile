import React from 'react';
import { View } from 'react-native';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './styles'

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

interface Props {
  userInfo: User
}

const BottomBar = (props: Props) => {
  const { userInfo } = props

  const navigation = useNavigation();

  function handleNavigateToProfile() {

    navigation.navigate('Profile', { userInfo })
  }
  function handleNavigateToCheckIn() {
    navigation.navigate('CheckIn', { userInfo })
  }
  function handleNavigateToRank() {
    navigation.navigate('Rank', { userInfo })
  }

  return (
    <View>
      <View style={styles.container}>
        <View style={[styles.col1, { borderTopRightRadius: 200 }]}>
          <TouchableOpacity onPress={handleNavigateToRank}>
            <MaterialCommunityIcons name="podium-gold" size={30} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={[styles.col1, { borderTopLeftRadius: 200 }]}>
          <TouchableOpacity onPress={handleNavigateToProfile}>
            <AntDesign name="user" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.center} />

      <View style={styles.volumnCon}>
        <TouchableOpacity onPress={handleNavigateToCheckIn}>
          <AntDesign name="qrcode" size={40} color="#37323e" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomBar;