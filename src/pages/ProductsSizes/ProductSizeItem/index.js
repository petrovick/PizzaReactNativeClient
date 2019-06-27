import React, { Component } from "react";
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

export default ProductSizeItem;
