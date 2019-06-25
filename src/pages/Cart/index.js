import React, { Component } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import CartItem from "./CartItem";

import {
  Container,
  Header,
  HeaderText,
  ProductsList,
  IconLimparPedidos,
  Footer,
  IconAddProduct,
  CheckoutButton,
  CheckoutButtonText
} from "./styles";

export default class Products extends Component {
  state = {
    cart: {
      data: [
        {
          id: 1,
          product: {
            name: "Pizza Calabresa"
          },
          productSize: {
            description: "Média"
          },
          value: 42.0,
          url: "https://s3-sa-east-1.amazonaws.com/gonative/cover1.png"
        },
        {
          id: 2,
          product: {
            name: "Pizza 4 Queijos"
          },
          productSize: {
            description: "Pequena"
          },
          value: 29.0,
          url: "https://s3-sa-east-1.amazonaws.com/gonative/cover1.png"
        },
        {
          id: 3,
          product: {
            name: "Coca Cola"
          },
          productSize: {
            description: "300ML"
          },
          value: 6.0,
          url: "https://s3-sa-east-1.amazonaws.com/gonative/cover1.png"
        }
      ]
    }
  };

  handleBackClick = () => {
    const { navigation } = this.props;
    navigation.navigate("Products");
  };

  handleRemoveCartItemClick = cartItem => {
    console.tron.warn("handleProductClick");
  };

  handleCheckoutCartClick = () => {
    const { navigation } = this.props;
    navigation.navigate("Checkout");
  };

  render() {
    const { cart } = this.state;
    return (
      <Container>
        <Header
          source={require("~/img/headerbackground/header-background.png")}
        >
          <TouchableOpacity onPress={() => this.handleBackClick()}>
            <IconLimparPedidos name="chevron-left" />
          </TouchableOpacity>
          <HeaderText>Carrinho</HeaderText>
        </Header>

        <ProductsList
          data={cart.data}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <CartItem
              cartItem={item}
              onItemRemoveClick={this.handleRemoveCartItemClick}
            />
          )}
          ListFooterComponent={() => (
            <Footer>
              <TouchableOpacity onPress={() => this.handleBackClick()}>
                <IconAddProduct />
              </TouchableOpacity>

              <CheckoutButton onPress={() => this.handleCheckoutCartClick()}>
                <CheckoutButtonText>Realizar Pedido</CheckoutButtonText>
                <Icon name="chevron-right" size={24} color="#FFF" />
              </CheckoutButton>
            </Footer>
          )}
        />
      </Container>
    );
  }
}
