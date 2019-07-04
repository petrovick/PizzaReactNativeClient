import React, { Component } from "react";
import PropTypes from "prop-types";

import { TouchableOpacity, Text, View } from "react-native";
import { Container, ProductImage, ProductName, ProductValue } from "./styles";

const ProductSizeItem = ({ productSize: item, onItemClick }) => (
  <Container onPress={() => onItemClick(item)}>
    <View>
      <ProductImage source={{ uri: item.ProductSize.url }} />
      <ProductName>{item.ProductSize.description}</ProductName>
      <ProductValue>R$ {item.price}</ProductValue>
    </View>
  </Container>
);

ProductSizeItem.propTypes = {
  onItemClick: PropTypes.func.isRequired,
  productSize: PropTypes.shape({
    ProductSize: PropTypes.shape({
      description: PropTypes.string
    }),
    price: PropTypes.string
  })
};

export default ProductSizeItem;
