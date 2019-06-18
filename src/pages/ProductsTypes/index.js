import React, { Component } from "react";

import { View } from "react-native";

import {
  Container,
  IconBack,
  Header,
  HeaderText,
  ProductsTypesList
} from "./styles";

import ProductTypeItem from "./ProductTypeItem";

export default class ProductsTypes extends Component {
  state = {
    productsTypes: {
      data: [
        {
          id: 1,
          name: "Portuguesa",
          url: "https://s3-sa-east-1.amazonaws.com/gonative/cover1.png"
        },
        {
          id: 2,
          name: "Calabresa",
          url: "https://s3-sa-east-1.amazonaws.com/gonative/cover1.png"
        },
        {
          id: 3,
          name: "Frango Frito",
          url: "https://s3-sa-east-1.amazonaws.com/gonative/cover1.png"
        },
        {
          id: 4,
          name: "Marguerita",
          url: "https://s3-sa-east-1.amazonaws.com/gonative/cover1.png"
        },
        {
          id: 5,
          name: "A Moda",
          url: "https://s3-sa-east-1.amazonaws.com/gonative/cover1.png"
        },
        {
          id: 6,
          name: "Suiça",
          url: "https://s3-sa-east-1.amazonaws.com/gonative/cover1.png"
        }
      ]
    }
  };

  handleBackClick = () => {
    const { navigation } = this.props;
    navigation.navigate("Products");
  };

  handleTypeProductClick = productType => {
    const { navigation } = this.props;
    navigation.navigate("ProductsSizes");
  };

  render() {
    const { productsTypes } = this.state;
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
          data={productsTypes.data}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <ProductTypeItem
              productType={item}
              onItemClick={this.handleTypeProductClick}
            />
          )}
          numColumns={2}
        />
      </Container>
    );
  }
}
