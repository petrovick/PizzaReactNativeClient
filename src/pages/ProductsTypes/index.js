import React, { Component } from "react";

import { View } from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ProdutTypesActions from "~/store/ducks/productTypes";

import {
  Container,
  IconBack,
  Header,
  HeaderText,
  ProductsTypesList
} from "./styles";

import ProductTypeItem from "./ProductTypeItem";

class ProductsTypes extends Component {
  state = {
    productsTypes: {
      data: [
        {
          id: 1,
          name: "Portuguesa",
          url: "https://s3-sa-east-1.amazonaws.com/gonative/cover1.png"
        },
        {
          id: 2,
          name: "Calabresa",
          url: "https://s3-sa-east-1.amazonaws.com/gonative/cover1.png"
        },
        {
          id: 3,
          name: "Frango Frito",
          url: "https://s3-sa-east-1.amazonaws.com/gonative/cover1.png"
        },
        {
          id: 4,
          name: "Marguerita",
          url: "https://s3-sa-east-1.amazonaws.com/gonative/cover1.png"
        },
        {
          id: 5,
          name: "A Moda",
          url: "https://s3-sa-east-1.amazonaws.com/gonative/cover1.png"
        },
        {
          id: 6,
          name: "Suiça",
          url: "https://s3-sa-east-1.amazonaws.com/gonative/cover1.png"
        }
      ]
    }
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
          <IconBack onPress={this.handleBackClick} />
          <HeaderText>Selecione um Tipo</HeaderText>
          <View />
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
