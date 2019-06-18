import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { metrics, colors } from "~/styles";
import Icon from "react-native-vector-icons/MaterialIcons";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.light};
`;

export const Header = styled.ImageBackground`
  padding-left: 20;
  padding-right: 20;
  padding-top: ${getStatusBarHeight() + 10};
  height: ${54 + getStatusBarHeight() + 10};
  background-color: transparent;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderText = styled.Text`
  color: ${colors.white};
  font-size: ${(metrics.fontSizeUp * 4) / 3}px;
  font-weight: bold;
`;

export const ProductsList = styled.FlatList`
  flex: 1;
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
  name: "add_shopping_cart"
})`
  background-color: ${colors.orderIcon};
  border-radius: 50px;
  padding: ${metrics.basePadding}px;
`;
