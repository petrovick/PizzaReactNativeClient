import React, { Component } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import CartItem from "./CartItem";

import {
  Container,
  Header,
  HeaderText,
  ProductsList,
  IconLimparPedidos,
  Footer,
  IconAddProduct
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
        },
        {
          id: 4,
          product: {
            name: "Guaraná Mineiro"
          },
          productSize: {
            description: "2L"
          },
          value: 4.5,
          url: "https://s3-sa-east-1.amazonaws.com/gonative/cover1.png"
        }
      ]
    }
  };

  handleRemoveCartItemClick = cartItem => {
    console.tron.warn("handleProductClick");
  };

  render() {
    const { cart } = this.state;
    return (
      <Container>
        <Header
          source={require("~/img/headerbackground/header-background.png")}
        >
          <IconLimparPedidos name="chevron-left" />
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
              <IconAddProduct />
              <TouchableOpacity>
                <Text>Convidar</Text>
              </TouchableOpacity>
            </Footer>
          )}
        />
      </Container>
    );
  }
}
