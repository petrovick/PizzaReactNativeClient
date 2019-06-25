import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { metrics, colors } from "~/styles";
import Icon from "react-native-vector-icons/Entypo";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.light};
`;

export const Header = styled.ImageBackground`
  padding-top: ${getStatusBarHeight()};
  height: ${getStatusBarHeight() + metrics.headerHeight}px;
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

export const OrdersList = styled.FlatList`
  flex: 1;
  margin-top: -60px;
`;

export const IconBack = styled(Icon).attrs({
  color: `${colors.white}`,
  size: 24,
  name: "chevron-left"
})`
  border-radius: 50px;
  padding: ${metrics.basePadding}px;
`;
