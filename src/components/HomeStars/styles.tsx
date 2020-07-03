import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(Animated.View)`
  height: 130px;
  margin-top: 10px;
`;

export const TabsContainer = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: { paddingLeft: 0, paddingRight: 20 },
  showsHorizontalScrollIndicator: false,
})``;

export const TabItem = styled.View`
  width: 130px;
  height: 130px;
  background-color: #fff;
  border-radius: 15px;
  margin-left: 10px;
  padding: 0;
  justify-content: flex-end;
`;
