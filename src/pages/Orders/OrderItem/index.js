import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-native";
import moment from "moment";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import {
  Container,
  ContainerText,
  OrderNumberText,
  OrderDateText,
  OrderPriceText
} from "./styles";

const OrderItem = ({ order }) => (
  <Container>
    <ContainerText>
      <OrderNumberText>Pedido #{order.id}</OrderNumberText>
      <OrderDateText>{moment(order.date).fromNow()}</OrderDateText>
      <OrderPriceText>R$ {order.total_price}</OrderPriceText>
    </ContainerText>
  </Container>
);

OrderItem.propTypes = {
  orders: PropTypes.shape({
    id: PropTypes.number,
    date: PropTypes.string,
    total_price: PropTypes.string
  })
};

export default OrderItem;
