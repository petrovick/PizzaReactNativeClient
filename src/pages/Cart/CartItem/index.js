import React from "react";
import { Button, TouchableOpacity } from "react-native";

import {
  Container,
  Image,
  ContainerText,
  ProductText,
  ProductDescriptionText,
  ProductTimeText,
  IconRemove
} from "./styles";

const ProductItem = ({ cartItem, onItemRemoveClick }) => (
  <Container>
    <Image source={{ uri: cartItem.url }} />
    <ContainerText>
      <ProductText>{cartItem.product.name}</ProductText>
      <ProductDescriptionText>
        {cartItem.productSize.description}
      </ProductDescriptionText>
      <ProductTimeText>{cartItem.value}</ProductTimeText>
    </ContainerText>
    <TouchableOpacity onPress={() => onItemRemoveClick(cartItem)}>
      <IconRemove />
    </TouchableOpacity>
  </Container>
);

export default ProductItem;
