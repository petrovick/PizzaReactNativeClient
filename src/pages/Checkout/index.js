import React, { Component } from "react";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/Entypo";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CartActions from "~/store/ducks/cart";

import { View, Text, TouchableOpacity } from "react-native";

import {
  Container,
  IconBack,
  Header,
  HeaderLeft,
  HeaderText,
  TotalPriceText,
  ObsTextInput,
  CepInputTextInput,
  AddressContainer,
  StreetTextInput,
  NumberTextInput,
  NeightborInputTextInput,
  ContainerButton,
  CheckoutButton,
  CheckoutButtonText
} from "./styles";

class Checkout extends Component {
  static propTypes = {
    commitCheckoutOrderRequest: PropTypes.func.isRequired,
    cart: PropTypes.shape({
      data: PropTypes.array
    })
  };

  state = {
    obs: "",
    zip: "",
    street: "",
    number: "",
    neighborhood: ""
  };

  handleBackClick = () => {
    const { navigation } = this.props;
    navigation.navigate("Cart");
  };

  handleFinishClick = () => {
    const { commitCheckoutOrderRequest, cart } = this.props;
    const productTypeSizes = cart.data.map(item => {
      return { id: item.id, price: item.price };
    });
    commitCheckoutOrderRequest({
      ...this.state,
      productTypeSizes: productTypeSizes,
      total: cart.total
    });
  };

  render() {
    const { cart } = this.props;
    return (
      <Container>
        <Header
          source={require("~/img/headerbackground/header-background.png")}
        >
          <HeaderLeft>
            <TouchableOpacity onPress={() => this.handleBackClick()}>
              <IconBack />
            </TouchableOpacity>
            <HeaderText>Realizar Pedido</HeaderText>
          </HeaderLeft>
          <TotalPriceText>R$ {cart.total}</TotalPriceText>
        </Header>
        <ObsTextInput
          onChangeText={text => this.setState({ obs: text })}
          placeholder="Alguma observação?"
        />
        <CepInputTextInput
          placeholder="Qual seu CEP?"
          onChangeText={text => this.setState({ zip: text })}
        />
        <AddressContainer>
          <StreetTextInput
            placeholder="Rua"
            onChangeText={text => this.setState({ street: text })}
          />
          <NumberTextInput
            placeholder="Nº"
            onChangeText={text => this.setState({ number: text })}
          />
        </AddressContainer>
        <NeightborInputTextInput
          placeholder="Bairro"
          onChangeText={text => this.setState({ neighborhood: text })}
        />
        <ContainerButton>
          <CheckoutButton onPress={() => this.handleFinishClick()}>
            <CheckoutButtonText>Finalizar</CheckoutButtonText>
            <Icon name="chevron-right" size={24} color="#FFF" />
          </CheckoutButton>
        </ContainerButton>
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
)(Checkout);
