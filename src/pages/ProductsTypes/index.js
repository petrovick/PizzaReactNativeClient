import React, { Component } from "react";

import { View } from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ProdutTypesActions from "~/store/ducks/productTypes";

import { metrics, colors } from "~/styles";

import {
  Container,
  IconBack,
  Header,
  HeaderLeft,
  HeaderText,
  ProductsTypesList
} from "./styles";

import ProductTypeItem from "./ProductTypeItem";

class ProductsTypes extends Component {
  static propTypes = {
    productTypesListRequest: PropTypes.func.isRequired,
    navigaiton: PropTypes.func.isRequired,
    productTypes: PropTypes.shape({
      data: PropTypes.array()
    })
  };

  componentDidMount() {
    const { productTypesListRequest, navigation } = this.props;
    const product = navigation.getParam("product");
    productTypesListRequest(product.id);
  }

  handleBackClick = () => {
    const { navigation } = this.props;
    navigation.navigate("Products");
  };

  handleTypeProductClick = productType => {
    const { navigation } = this.props;
    const product = navigation.getParam("product");
    navigation.navigate("ProductsSizes", { productType, product });
  };

  render() {
    const { productTypes } = this.props;
    return (
      <Container>
        <Header
          source={require("~/img/headerbackground/header-background.png")}
        >
          <HeaderLeft>
            <IconBack onPress={this.handleBackClick} />
            <HeaderText>Selecione um Tipo</HeaderText>
          </HeaderLeft>
        </Header>
        <ProductsTypesList
          data={productTypes.data}
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
const mapStateToProps = state => ({
  productTypes: state.productTypes
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ProdutTypesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsTypes);
