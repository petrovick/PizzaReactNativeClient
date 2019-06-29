import styled from "styled-components/native";
import { colors, metrics } from "~/styles";

export const Container = styled.TouchableOpacity`
  flex: 1;
  border-radius: ${metrics.baseRadius}px;
  margin-top: ${metrics.baseMargin}px;
  /*margin-left: ${metrics.baseMargin}px;
  margin-right: ${metrics.baseMargin}px;
  */align-items: center;
  max-width: ${(metrics.screenWidth - 60) / 2};
  background-color: ${colors.white};
  justify-content: center;
`;

export const ProductImage = styled.Image`
  width: 130px;
  height: 126px;
`;

export const ProductName = styled.Text`
  font-size: ${metrics.fontSizeUp}px;
  font-weight: bold;
  color: ${colors.darker};
  margin-top: ${metrics.baseMargin}px;
`;
