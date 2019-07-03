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
  HeaderLeft,
  HeaderText,
  ProductsSizesList
} from "./styles";

import ProductSizeItem from "./ProductSizeItem";
class ProductsSizes extends Component {
  static propTypes = {
    navigation: PropTypes.func.isRequired,
    productSizesListRequest: PropTypes.func.isRequired,
    addToCart: PropTypes.func.isRequired,
    sumToTotal: PropTypes.func.isRequired,
    displayInfo: PropTypes.func.isRequired,
    cart: PropTypes.shape({
      total: PropTypes.number
    }),
    productSizes: PropTypes.shape({
      data: PropTypes.array()
    })
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
          <HeaderLeft>
            <IconBack onPress={this.handleBackClick} />
            <HeaderText>Selecione um Tamanho</HeaderText>
          </HeaderLeft>
        </Header>
        <ProductsSizesList
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
