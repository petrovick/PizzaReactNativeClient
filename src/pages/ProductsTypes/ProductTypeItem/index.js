import React, { Component } from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Text, View } from "react-native";
import {
  Container,
  ProductDivImage,
  ProductImage,
  ProductName
} from "./styles";

const ProductTypeItem = ({ productType, onItemClick }) => (
  <Container onPress={() => onItemClick(productType)}>
    <View>
      <ProductDivImage imageUrl={productType.url}>
        <ProductImage source={{ uri: productType.url }} resizeMode="contain" />
      </ProductDivImage>
      <ProductName>{productType.name}</ProductName>
    </View>
  </Container>
);

ProductTypeItem.propTypes = {
  onItemClick: PropTypes.func.isRequired,
  productType: PropTypes.shape({
    url: PropTypes.string,
    name: PropTypes.string
  })
};

export default ProductTypeItem;
