import React, { Component } from "react";

import { View } from "react-native";

import {
  Container,
  IconBack,
  Header,
  HeaderText,
  ProductsTypesList
} from "./styles";

import ProductSizeItem from "./ProductSizeItem";

export default class ProductsTypes extends Component {
  state = {
    productsSizes: {
      data: [
        {
          id: 1,
          description: "Grande",
          url: "https://s3-sa-east-1.amazonaws.com/gonative/cover1.png"
        },
        {
          id: 2,
          description: "Média",
          url: "https://s3-sa-east-1.amazonaws.com/gonative/cover1.png"
        },
        {
          id: 3,
          description: "Pequena",
          url: "https://s3-sa-east-1.amazonaws.com/gonative/cover1.png"
        }
      ]
    }
  };

  handleBackClick = () => {
    const { navigation } = this.props;
    navigation.navigate("ProductsTypes");
  };

  handleProductSizeClick = productSize => {
    console.tron.error(
      `handleTypeProductClick TESTE Petrovick: ${productSize}`
    );
  };

  render() {
    const { productsSizes } = this.state;
    return (
      <Container>
        <Header
          source={require("~/img/headerbackground/header-background.png")}
        >
          <IconBack onPress={this.handleBackClick} />
          <HeaderText>Selecione um tipo</HeaderText>
          <View />
        </Header>
        <ProductsTypesList
          data={productsSizes.data}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <ProductSizeItem
              productSize={item}
              onItemClick={this.handleProductSizeClick}
            />
          )}
          numColumns={2}
        />
      </Container>
    );
  }
}
