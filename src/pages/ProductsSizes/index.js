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
          <HeaderText>Selecione um Tamanho</HeaderText>
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
