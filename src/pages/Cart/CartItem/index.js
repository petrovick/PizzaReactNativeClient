import React from "react";
import { Button } from "react-native";

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
  <Container onPress={() => CartItem(cartItem)}>
    <Image source={{ uri: cartItem.url }} />
    <ContainerText>
      <ProductText>{cartItem.product.name}</ProductText>
      <ProductDescriptionText>
        {cartItem.productSize.description}
      </ProductDescriptionText>
      <ProductTimeText>{cartItem.value}</ProductTimeText>
    </ContainerText>
    <IconRemove />
  </Container>
);

export default ProductItem;
