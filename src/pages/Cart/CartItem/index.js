import React from "react";
import PropTypes from "prop-types";
import { default as NumberFormat } from "react-number-format";

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
    <Image source={{ uri: cartItem.productType.url }} resizeMode="contain" />
    <ContainerText>
      <ProductText>{cartItem.productType.name}</ProductText>
      <ProductDescriptionText>
        {cartItem.productSize.description}
      </ProductDescriptionText>

      <NumberFormat
        value={parseFloat(cartItem.price)}
        displayType={"text"}
        defaultValue="0"
        thousandSeparator="."
        decimalScale={2}
        prefix={"R$ "}
        decimalSeparator=","
        renderText={value => <ProductPriceText>{value}</ProductPriceText>}
      />
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
