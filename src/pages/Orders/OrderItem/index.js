import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-native";
import moment from "moment";
import { default as NumberFormat } from "react-number-format";

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

      <NumberFormat
        value={parseFloat(order.total_price)}
        displayType={"text"}
        thousandSeparator="."
        decimalScale={2}
        prefix={"R$ "}
        decimalSeparator=","
        renderText={value => <OrderPriceText>{value}</OrderPriceText>}
      />
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
