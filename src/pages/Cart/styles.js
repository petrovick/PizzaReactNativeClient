import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { metrics, colors } from "~/styles";
import Icon from "react-native-vector-icons/MaterialIcons";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.light};
`;

export const Header = styled.ImageBackground`
  padding-top: ${getStatusBarHeight()};
  height: ${getStatusBarHeight() + metrics.headerHeight};
  background-color: transparent;

  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderText = styled.Text`
  color: ${colors.white};
  font-size: ${(metrics.fontSizeUp * 4) / 3}px;
  font-weight: bold;
  margin-right: ${metrics.baseMargin}px;
`;

export const ProductsList = styled.FlatList`
  flex: 1;
  margin-top: -60px;
`;

export const IconLimparPedidos = styled(Icon).attrs({
  color: `${colors.white}`,
  size: 24,
  name: "shopping-bag"
})``;

export const IconPedidos = styled(Icon).attrs({
  color: `${colors.white}`,
  size: 24
})`
  background-color: ${colors.orderIcon};
  border-radius: 50px;
  padding: ${metrics.basePadding}px;
`;

export const Footer = styled.View`
  padding-left: 20;
  padding-right: 20;
  background-color: transparent;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const IconAddProduct = styled(Icon).attrs({
  color: `${colors.white}`,
  size: 24,
  name: "add-shopping-cart"
})`
  background-color: ${colors.orderIcon};
  border-radius: 50px;
  padding: ${metrics.basePadding}px;
`;

export const CheckoutButton = styled.TouchableOpacity`
  height: 40px;
  width: 140px;
  border-radius: ${metrics.baseRadius * 6}px;
  margin-right: ${metrics.baseMargin}px;
  background-color: ${colors.orderIcon};
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const CheckoutButtonText = styled.Text`
  color: ${colors.white};
  font-weight: bold;
  font-size: ${metrics.fontSizeUp}px;
`;
