import React, { Component } from "react";
import PropTypes from "prop-types";

import { View, Text, FlatList, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import CartItem from "./CartItem";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CartActions from "~/store/ducks/cart";

import HeaderComp from "~/components/HeaderComp";

import {
  Container,
  Header,
  HeaderLeft,
  IconBack,
  HeaderText,
  TotalPriceText,
  ProductsList,
  Footer,
  IconAddProduct,
  CheckoutButton,
  CheckoutButtonText
} from "./styles";

class Cart extends Component {
  static propTypes = {
    cart: PropTypes.shape({
      data: PropTypes.array
    })
  };

  handleBackClick = () => {
    const { navigation } = this.props;
    navigation.navigate("Products");
  };

  handleRemoveCartItemClick = cartItem => {
    const { removeFromCart } = this.props;
    removeFromCart(cartItem);
  };

  handleCheckoutCartClick = () => {
    const { navigation } = this.props;
    navigation.navigate("Checkout");
  };

  render() {
    const { cart } = this.props;
    return (
      <Container>
        <HeaderComp
          title="Carrinho"
          price={cart.total}
          IconLeft={IconBack}
          handleLeftClick={() => this.handleBackClick()}
        />
        {cart && cart.data && (
          <ProductsList
            data={cart.data}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) =>
              item && (
                <CartItem
                  cartItem={item}
                  onItemRemoveClick={this.handleRemoveCartItemClick}
                />
              )
            }
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
        )}
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
