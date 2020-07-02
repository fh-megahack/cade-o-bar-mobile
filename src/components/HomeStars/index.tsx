import React from 'react'

import { Image } from 'react-native';
import { Container, TabsContainer, TabItem, } from './styles';
  
  export default function Tabs({ translateY }) {
    return (
      <Container style={{
        transform: [{
          translateY: translateY.interpolate({
            inputRange: [0, 380],
            outputRange: [0, 30],
            extrapolate: 'clamp',
          }),
        }],
        opacity: translateY.interpolate({
          inputRange: [0, 380],
          outputRange: [1, 0.3],
          extrapolate: 'clamp',
        }),
      }}
      >
        <TabsContainer>
          <TabItem>
            <Image style={{width: 130, height: 130, zIndex: 2, borderRadius: 10}} source={require('../../assets/details/limonada.jpg')} />
          </TabItem>
          <TabItem>
            <Image style={{width: 130, height: 130, zIndex: 2, borderRadius: 10}} source={require('../../assets/details/cervejaBudweiser.jpg')} />
          </TabItem>
          <TabItem>
            <Image style={{width: 130, height: 130, zIndex: 2, borderRadius: 10}} source={require('../../assets/details/brahmaDuploMalte.jpg')} />
          </TabItem>
          <TabItem>
            <Image style={{width: 130, height: 130, zIndex: 2, borderRadius: 10}} source={require('../../assets/details/brahmaDuploMalte.jpg')} />
          </TabItem>
          <TabItem>
            <Image style={{width: 130, height: 130, zIndex: 2, borderRadius: 10}} source={require('../../assets/details/brahmaDuploMalte.jpg')} />
          </TabItem>
        </TabsContainer>
      </Container>
    );
  }