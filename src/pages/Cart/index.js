import React, { Component } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import CartItem from "./CartItem";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CartActions from "~/store/ducks/cart";

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

class Cart extends Component {
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
    const { cart } = this.props;
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

const mapStateToProps = state => ({
  cart: state.cart
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
