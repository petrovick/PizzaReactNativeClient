import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import ProductItem from "./ProductItem";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ProdutsActions from "~/store/ducks/products";

import {
  Container,
  Header,
  HeaderText,
  ProductsList,
  IconOrders,
  IconCart
} from "./styles";

class Products extends Component {
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

  handleProductClick = product => {
    console.tron.warn("handleProductClick");
    const { navigation } = this.props;
    navigation.navigate("ProductsTypes", { product });
  };

  handleCartClick = () => {
    const { navigation } = this.props;
    navigation.navigate("Cart");
  };

  handleOrdersClick = () => {
    const { navigation } = this.props;
    navigation.navigate("Orders");
  };

  componentDidMount() {
    const { productsListRequest } = this.props;
    productsListRequest();
  }

  render() {
    const { data } = this.props.products;
    if (!data) {
      return <View>Dados vazio.</View>;
    }
    return (
      <Container>
        <Header
          source={require("~/img/headerbackground/header-background.png")}
        >
          <TouchableOpacity onPress={() => this.handleOrdersClick()}>
            <IconOrders />
          </TouchableOpacity>
          <HeaderText>Pizzaria Don Juan</HeaderText>
          <TouchableOpacity onPress={() => this.handleCartClick()}>
            <IconCart />
          </TouchableOpacity>
        </Header>

        <ProductsList
          data={data}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <ProductItem product={item} onItemClick={this.handleProductClick} />
          )}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ProdutsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
