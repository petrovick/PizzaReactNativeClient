import React, { Component } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { Container, ProductImage, ProductName } from "./styles";

const ProductSizeItem = ({ productSize, onItemClick }) => (
  <Container onPress={() => onItemClick(productSize)}>
    <View>
      <ProductImage source={{ uri: productSize.url }} />
      <ProductName>{productSize.description}</ProductName>
    </View>
  </Container>
);

export default ProductSizeItem;
