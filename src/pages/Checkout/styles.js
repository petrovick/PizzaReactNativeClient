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

export const IconBack = styled(Icon).attrs({
  name: "chevron-left",
  size: 24,
  color: "#FFF"
})`
  margin-left: ${metrics.baseMargin}px;
`;

export const HeaderText = styled.Text`
  color: ${colors.white};
  font-size: ${(metrics.fontSizeUp * 4) / 3}px;
  font-weight: bold;
`;

export const TotalPriceText = styled.Text`
  color: ${colors.white};
  font-size: ${(metrics.fontSizeDown * 4) / 3}px;
  font-weight: bold;
  margin-right: ${metrics.baseMargin}px;
`;

export const ObsTextInput = styled.TextInput.attrs({
  multiline: true
})`
  background-color: ${colors.white};
  margin-left: ${metrics.baseMargin}px;
  margin-right: ${metrics.baseMargin}px;
  margin-top: -60px;
  border-radius: 10px;
  height: 100px;
`;

export const CepInputTextInput = styled.TextInput`
  background-color: ${colors.white};
  margin-top: ${metrics.baseMargin}px;
  margin-left: ${metrics.baseMargin}px;
  margin-right: ${metrics.baseMargin}px;
  border-radius: ${metrics.baseRadius}px;
  height: 50px;
`;

export const AddressContainer = styled.View`
  flex-direction: row;
  margin-top: ${metrics.baseMargin}px;
  margin-left: ${metrics.baseMargin}px;
  margin-right: ${metrics.baseMargin}px;
  background-color: ${colors.transparent};
`;

export const StreetTextInput = styled.TextInput`
  width: 70%;
  background-color: ${colors.white};
  border-radius: ${metrics.baseRadius}px;
  height: 50px;
  box-shadow: 15px -10px 3px #f55;
`;

export const NumberTextInput = styled.TextInput`
  flex: 1;
  margin-left: ${metrics.baseMargin}px;
  background-color: ${colors.white};
  border-radius: ${metrics.baseRadius}px;
  height: 50px;
  box-shadow: 15px -10px 3px #f55;
`;

export const NeightborInputTextInput = styled.TextInput`
  background-color: ${colors.white};
  margin-top: ${metrics.baseMargin}px;
  margin-left: ${metrics.baseMargin}px;
  margin-right: ${metrics.baseMargin}px;
  border-radius: ${metrics.baseRadius}px;
  height: 50px;
  box-shadow: 15px -10px 3px #f55;
`;

export const ContainerButton = styled.View`
  background-color: ${colors.transparent};
  align-items: flex-end;
  justify-content: center;
  height: 50px;
`;

export const CheckoutButton = styled.TouchableOpacity`
  height: 40px;
  width: 120px;
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
