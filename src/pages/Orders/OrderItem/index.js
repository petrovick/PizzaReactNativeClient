import React from "react";
import { Button } from "react-native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import {
  Container,
  ContainerText,
  OrderNumberText,
  OrderDateText,
  OrderPriceText
} from "./styles";

const OrderItem = ({ order, onItemClick }) => (
  <Container onPress={() => onItemClick(order)}>
    <ContainerText>
      <OrderNumberText>Pedido #{order.id}</OrderNumberText>
      <OrderDateText>{order.date}</OrderDateText>
      <OrderPriceText>{order.price}</OrderPriceText>
    </ContainerText>
  </Container>
);

export default OrderItem;
