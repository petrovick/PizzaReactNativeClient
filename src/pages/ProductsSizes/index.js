import React, { Component } from "react";
import PropTypes from "prop-types";
import { ToastActionsCreators } from "react-native-redux-toast";

import { View } from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ProdutSizesActions from "~/store/ducks/productSizes";

import HeaderComp from "~/components/HeaderComp";
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
    productSizesListRequest: PropTypes.func.isRequired,
    addToCart: PropTypes.func.isRequired,
    sumToTotal: PropTypes.func.isRequired,
    displayInfo: PropTypes.func.isRequired,
    cart: PropTypes.shape({
      total: PropTypes.number
    }),
    productSizes: PropTypes.shape({
      data: PropTypes.array
    })
  };

  componentDidMount() {
    this.listProductSizes();
  }

  listProductSizes = () => {
    const { productSizesListRequest, navigation } = this.props;
    const productType = navigation.getParam("productType");
    productSizesListRequest(productType.id);
  };

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

    const { name: prodName } = product;
    const { name: prodTypeName } = productType;
    displayInfo(
      `Adicionado ${prodName} ${prodTypeName} ao carrinho com sucesso.`
    );
  };

  render() {
    const { data, loading } = this.props.productSizes;
    return (
      <Container>
        <HeaderComp
          title="Selecione um Tamanho"
          IconLeft={IconBack}
          handleLeftClick={() => this.handleBackClick()}
        />

        <ProductsSizesList
          data={data}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <ProductSizeItem
              productSize={item}
              onItemClick={this.handleProductSizeClick}
            />
          )}
          numColumns={2}
          refreshing={loading}
          onRefresh={this.listProductSizes}
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
