import styled from "styled-components/native";
import { colors, metrics } from "~/styles";

export const Container = styled.TouchableOpacity`
  flex: 1;
  border-radius: ${metrics.baseRadius}px;
  padding: ${metrics.basePadding * 2}px;
  margin-left: ${metrics.baseMargin * 2}px;
  margin-right: ${metrics.baseMargin * 2}px;
  margin-top: ${metrics.baseMargin * 2}px;
  align-items: center;
  max-width: ${(metrics.screenWidth - 100) / 2};
  background-color: ${colors.white};
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
