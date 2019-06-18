import React, { Component } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { Container, ProductImage, ProductName } from "./styles";

const ProductTypeItem = ({ productType, onItemClick }) => (
  <Container onPress={() => onItemClick(productType)}>
    <View>
      <ProductImage source={{ uri: productType.url }} />
      <ProductName>{productType.name}</ProductName>
    </View>
  </Container>
);

export default ProductTypeItem;
