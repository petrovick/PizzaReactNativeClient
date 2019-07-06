import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { metrics, colors } from "~/styles";
import Icon from "react-native-vector-icons/Entypo";
import IconAwesome from "react-native-vector-icons/FontAwesome";

export const Header = styled.ImageBackground`
  padding-top: ${getStatusBarHeight()};
  height: ${getStatusBarHeight() + metrics.headerHeight}px;
  background-color: transparent;

  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderLeft = styled.View`
  flex-direction: row;
`;

export const HeaderText = styled.Text`
  color: ${colors.white};
  font-size: ${(metrics.fontSizeUp * 4) / 3}px;
  font-weight: bold;
  padding: ${metrics.basePadding / 4}px;
  margin-left: ${metrics.baseMargin * 2}px;
  margin-top: ${metrics.baseMargin * 2}px;
`;

export const TotalPriceText = styled.Text`
  color: ${colors.white};
  font-size: ${(metrics.fontSizeUp * 4) / 3}px;
  font-weight: bold;
  padding: ${metrics.basePadding / 4}px;
  margin-right: ${metrics.baseMargin * 2}px;
  margin-top: ${metrics.baseMargin * 2}px;
`;
