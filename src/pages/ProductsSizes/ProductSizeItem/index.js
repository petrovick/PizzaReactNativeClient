import React, { Component } from "react";
import PropTypes from "prop-types";
import { default as NumberFormat } from "react-number-format";

import { TouchableOpacity, Text, View } from "react-native";
import { Container, ProductImage, ProductName, ProductValue } from "./styles";

const ProductSizeItem = ({ productSize: item, onItemClick }) => (
  <Container onPress={() => onItemClick(item)}>
    <View>
      <ProductImage
        source={{ uri: item.ProductSize.url }}
        resizeMode="contain"
      />
      <ProductName>{item.ProductSize.description}</ProductName>
      <NumberFormat
        value={parseFloat(item.price)}
        displayType={"text"}
        thousandSeparator="."
        decimalScale={2}
        prefix={"R$ "}
        decimalSeparator=","
        renderText={value => <ProductValue>{value}</ProductValue>}
      />
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
