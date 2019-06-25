import React, { Component } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { Container, ProductImage, ProductName, ProductValue } from "./styles";

const ProductSizeItem = ({ productSize, onItemClick }) => (
  <Container onPress={() => onItemClick(productSize)}>
    <View>
      <ProductImage source={{ uri: productSize.url }} />
      <ProductName>{productSize.description}</ProductName>
      <ProductValue>R$ {productSize.price}</ProductValue>
    </View>
  </Container>
);

export default ProductSizeItem;
