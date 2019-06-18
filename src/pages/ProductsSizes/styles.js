import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { metrics, colors } from "~/styles";
import Icon from "react-native-vector-icons/Entypo";

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

export const IconBack = styled(Icon).attrs({
  size: 24,
  name: "chevron-left",
  color: `${colors.white}`
})``;

export const HeaderText = styled.Text`
  color: ${colors.white};
  font-size: ${(metrics.fontSizeUp * 4) / 3}px;
  font-weight: bold;
`;

export const ProductsTypesList = styled.FlatList.attrs({
  columnWrapperStyle: {
    marginHorizontal: 10,
    justifyContent: "space-between"
  }
})`
  flex: 1;
`;
