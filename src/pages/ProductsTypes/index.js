import React, { Component } from "react";
import PropTypes from "prop-types";

import { View } from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ProdutTypesActions from "~/store/ducks/productTypes";

import { metrics, colors } from "~/styles";

import HeaderComp from "~/components/HeaderComp";

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
    productTypes: PropTypes.shape({
      data: PropTypes.array
    })
  };

  componentDidMount() {
    this.listProductTypes();
  }

  listProductTypes = () => {
    const { productTypesListRequest, navigation } = this.props;
    const product = navigation.getParam("product");
    productTypesListRequest(product.id);
  };

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
    const { data, loading } = this.props.productTypes;
    return (
      <Container>
        <HeaderComp
          title="Selecione um Tipo"
          IconLeft={IconBack}
          handleLeftClick={() => this.handleBackClick()}
        />

        <ProductsTypesList
          data={data}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <ProductTypeItem
              productType={item}
              onItemClick={this.handleTypeProductClick}
            />
          )}
          numColumns={2}
          refreshing={loading}
          onRefresh={this.listProductTypes}
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
