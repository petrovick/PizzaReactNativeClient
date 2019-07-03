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

const ProductItem = ({ product, onItemClick }) => (
  <Container onPress={() => onItemClick(product)}>
    <Image source={{ uri: product.url }} />
    <ContainerText>
      <ProductText>{product.name}</ProductText>
      <ProductDescriptionText>{product.description}</ProductDescriptionText>
      <ProductTimeText>
        <Icon name="alarm" />
        {product.time + " mins"}
      </ProductTimeText>
    </ContainerText>
  </Container>
);

ProductItem.propTypes = {
  onItemClick: PropTypes.func.isRequired,
  product: PropTypes.shape({
    url: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    time: PropTypes.string
  })
};

export default ProductItem;
