import React, { Component } from "react";
import { ToastActionsCreators } from "react-native-redux-toast";

import { View } from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ProdutSizesActions from "~/store/ducks/productSizes";
import CartActions from "~/store/ducks/cart";

import {
  Container,
  IconBack,
  Header,
  HeaderText,
  ProductsTypesList
} from "./styles";

import ProductSizeItem from "./ProductSizeItem";

class ProductsSizes extends Component {
  state = {
    productsSizes: {
      data: [
        {
          id: 1,
          description: "Grande",
          url: "https://s3-sa-east-1.amazonaws.com/gonative/cover1.png",
          price: 76.0
        },
        {
          id: 2,
          description: "Média",
          url: "https://s3-sa-east-1.amazonaws.com/gonative/cover1.png",
          price: 42.0
        },
        {
          id: 3,
          description: "Pequena",
          url: "https://s3-sa-east-1.amazonaws.com/gonative/cover1.png",
          price: 29.0
        }
      ]
    }
  };

  componentDidMount() {
    const { productSizesListRequest, navigation } = this.props;
    const productType = navigation.getParam("productType");
    productSizesListRequest(productType.id);
  }

  handleBackClick = () => {
    const { navigation } = this.props;
    const product = navigation.getParam("product");
    navigation.navigate("ProductsTypes", { product });
  };

  handleProductSizeClick = productTypeSize => {
    const { addToCart, sumToTotal, navigation, cart, displayInfo } = this.props;
    const product = navigation.getParam("product");
    const productType = navigation.getParam("productType");
    const total = parseFloat(cart.total) + parseFloat(productTypeSize.price);

    addToCart({
      id: productTypeSize.id,
      price: productTypeSize.price,
      productType: productType,
      productSize: productTypeSize.ProductSize
    });
    sumToTotal(total);
    console.tron.log(this.props);
    console.tron.log(product);
    console.tron.log(productType);
    const { name: prodName } = product;
    const { name: prodTypeName } = productType;
    displayInfo(
      `Adicionado ${prodName} ${prodTypeName} ao carrinho com sucesso.`
    );
  };

  render() {
    const { productSizes } = this.props;
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
          data={productSizes.data}
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

const mapStateToProps = state => ({
  productSizes: state.productSizes,
  cart: state.cart
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { ...ProdutSizesActions, ...CartActions, ...ToastActionsCreators },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsSizes);
