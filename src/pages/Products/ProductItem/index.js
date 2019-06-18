import React from "react";
import { Button } from "react-native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import {
  Container,
  Image,
  ContainerText,
  ProductText,
  ProductDescriptionText,
  ProductTimeText
} from "./styles";

const ProductItem = ({ product, OnItemClick }) => (
  <Container onPress={() => onItemClick(product)}>
    <Image source={{ uri: product.url }} />
    <ContainerText>
      <ProductText>{product.name}</ProductText>
      <ProductDescriptionText>{product.description}</ProductDescriptionText>
      <ProductTimeText>
        <Icon name="alarm" />
        {product.time}
      </ProductTimeText>
    </ContainerText>
  </Container>
);

export default ProductItem;
