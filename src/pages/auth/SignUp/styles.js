import styled from "styled-components/native";
import { metrics } from "~/styles";

export const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Background = styled.ImageBackground.attrs({
  //backgroundColor: "rgba(0, 0, 255, 0.6)"
  //linear-gradient(#eb01a5, #d13531);
})`
  flex: 1;
  position: absolute;
  width: 100%;
  height: 100%;

  justify-content: center;
  align-items: center;
`;

export const TextName = styled.TextInput`
  background-color: #fff;
  width: 80%;
  border-radius: 5px;
  padding-left: 20px;
  height: ${metrics.inputSizeBig}px;
  border-radius: ${metrics.baseRadius * 2}px;
`;

export const TextEmail = styled.TextInput`
  margin-top: 10px;
  background-color: #fff;
  width: 80%;
  border-radius: 5px;
  padding-left: 20px;
  height: ${metrics.inputSizeBig}px;
  border-radius: ${metrics.baseRadius * 2}px;
`;

export const TextPassword = styled.TextInput`
  margin-top: 10px;
  background-color: #fff;
  width: 80%;
  border-radius: 5px;
  padding-left: 20px;
  height: ${metrics.inputSizeBig}px;
  border-radius: ${metrics.baseRadius * 2}px;
`;

export const ButtonSignUp = styled.TouchableOpacity`
  margin-top: 10px;
  width: 80%;
  background-color: #fd003e;
  align-items: center;
  justify-content: center;
  height: ${metrics.inputSizeBig}px;
  border-radius: ${metrics.baseRadius * 2}px;
`;

export const ButtonSignUpText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
