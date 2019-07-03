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

ProductItem.propTypes = {
  onItemRemoveClick: PropTypes.func.isRequired,
  cartItem: PropTypes.shape({
    price: PropTypes.string,
    productType: PropTypes.shape({
      url: PropTypes.string,
      name: PropTypes.string
    }),
    productSize: PropTypes.shape({
      description: PropTypes.string
    })
  })
};

export default ProductItem;
