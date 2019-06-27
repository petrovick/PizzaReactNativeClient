import React from "react";
import { Button, TouchableOpacity } from "react-native";

import {
  Container,
  Image,
  ContainerText,
  ProductText,
  ProductDescriptionText,
  ProductPriceText,
  IconRemove
} from "./styles";

const ProductItem = ({ cartItem, onItemRemoveClick }) => (
  <Container>
    <Image source={{ uri: cartItem.productType.url }} />
    <ContainerText>
      <ProductText>{cartItem.productType.name}</ProductText>
      <ProductDescriptionText>
        {cartItem.productSize.description}
      </ProductDescriptionText>
      <ProductPriceText>R$ {cartItem.price}</ProductPriceText>
    </ContainerText>
    <TouchableOpacity onPress={() => onItemRemoveClick(cartItem)}>
      <IconRemove />
    </TouchableOpacity>
  </Container>
);

export default ProductItem;
