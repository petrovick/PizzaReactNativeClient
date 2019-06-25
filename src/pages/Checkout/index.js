import React, { Component } from "react";
import Icon from "react-native-vector-icons/Entypo";

import { View, Text, TouchableOpacity } from "react-native";

import {
  Container,
  IconBack,
  Header,
  HeaderText,
  TotalPriceText,
  ObsTextInput,
  CepInputTextInput,
  AddressContainer,
  StreetTextInput,
  NumberTextInput,
  NeightborInputTextInput,
  ContainerButton,
  CheckoutButton,
  CheckoutButtonText
} from "./styles";

export default class Checkout extends Component {
  handleBackClick = () => {
    const { navigation } = this.props;
    navigation.navigate("Cart");
  };

  render() {
    return (
      <Container>
        <Header
          source={require("~/img/headerbackground/header-background.png")}
        >
          <TouchableOpacity onPress={() => this.handleBackClick()}>
            <IconBack />
          </TouchableOpacity>
          <HeaderText>Realizar Pedido</HeaderText>
          <TotalPriceText>R$ 107,50</TotalPriceText>
        </Header>
        <ObsTextInput placeholder="Alguma observação?" />
        <CepInputTextInput placeholder="Qual seu CEP?" />
        <AddressContainer>
          <StreetTextInput placeholder="Rua" />
          <NumberTextInput placeholder="Nº" />
        </AddressContainer>
        <NeightborInputTextInput placeholder="Bairro" />
        <ContainerButton>
          <CheckoutButton>
            <CheckoutButtonText>Finalizar</CheckoutButtonText>
            <Icon name="chevron-right" size={24} color="#FFF" />
          </CheckoutButton>
        </ContainerButton>
      </Container>
    );
  }
}
