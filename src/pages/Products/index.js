import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import ProductItem from "./ProductItem";

import {
  Container,
  Header,
  HeaderText,
  ProductsList,
  IconLimparPedidos,
  IconPedidos
} from "./styles";

export default class Products extends Component {
  state = {
    Products: {
      data: [
        {
          id: 1,
          name: "Pizza",
          description:
            "Mais de 50 sabores de pizza em até 4 tamanhos diferentes de fome.",
          time: "30 mins",
          url: "https://s3-sa-east-1.amazonaws.com/gonative/cover1.png"
        },
        {
          id: 2,
          name: "Massas",
          description:
            "10 tipos de massas com diferentes molhos para te satisfazer.",
          time: "25 mins",
          url: "https://s3-sa-east-1.amazonaws.com/gonative/cover1.png"
        },
        {
          id: 3,
          name: "Calzones",
          description:
            "Calzones super recheados com mais de 50 sabores diferentes.",
          time: "15 mins",
          url: "https://s3-sa-east-1.amazonaws.com/gonative/cover1.png"
        }
      ]
    }
  };

  handleProductClick = () => {
    console.tron.warn("handleProductClick");
    const { navigation } = this.props;
    navigation.navigate("ProductsTypes");
  };

  handleCartClick = () => {
    const { navigation } = this.props;
    navigation.navigate("Cart");
  };

  render() {
    const { Products } = this.state;
    return (
      <Container>
        <Header
          source={require("~/img/headerbackground/header-background.png")}
        >
          <IconLimparPedidos name="cog" />
          <HeaderText>Pizzaria Don Juan</HeaderText>
          <TouchableOpacity onPress={() => this.handleCartClick()}>
            <IconPedidos name="shopping-bag" />
          </TouchableOpacity>
        </Header>

        <ProductsList
          data={Products.data}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <ProductItem product={item} OnItemClick={this.handleProductClick} />
          )}
        />
      </Container>
    );
  }
}
