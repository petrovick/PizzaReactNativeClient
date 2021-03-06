import React, { Component } from "react";
import PropTypes from "prop-types";

import { TouchableOpacity } from "react-native";
import ProductItem from "./ProductItem";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ProdutsActions from "~/store/ducks/products";

import HeaderComp from "~/components/HeaderComp";

import {
  Container,
  //Header,
  //HeaderLeft,
  //HeaderText,
  ProductsList,
  IconOrders,
  IconCart
} from "./styles";

class Products extends Component {
  static propTypes = {
    productsListRequest: PropTypes.func.isRequired,
    products: PropTypes.shape({
      data: PropTypes.array,
      loading: PropTypes.bool
    })
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

  listProducts = () => {
    const { productsListRequest } = this.props;
    productsListRequest();
  };

  componentDidMount() {
    this.listProducts();
  }

  render() {
    const { data, loading } = this.props.products;
    if (!data) {
      return <View>Dados vazio.</View>;
    }
    return (
      <Container>
        <HeaderComp
          title="Pizzaria Dom Juan"
          IconLeft={IconOrders}
          IconRight={IconCart}
          handleLeftClick={() => this.handleOrdersClick()}
          handleRightClick={() => this.handleCartClick()}
        />
        {/*
        <Header
          source={require("~/img/headerbackground/header-background.png")}
        >
          <HeaderLeft>
            <TouchableOpacity onPress={() => this.handleOrdersClick()}>
              <IconOrders />
            </TouchableOpacity>
            <HeaderText>Pizzaria Don Juan</HeaderText>
          </HeaderLeft>
          <TouchableOpacity onPress={() => this.handleCartClick()}>
            <IconCart />
          </TouchableOpacity>
        </Header>
        */}
        <ProductsList
          data={data}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <ProductItem product={item} onItemClick={this.handleProductClick} />
          )}
          refreshing={loading}
          onRefresh={this.listProducts}
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
