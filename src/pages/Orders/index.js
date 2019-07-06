import React, { Component } from "react";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native";
import OrderItem from "./OrderItem";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import OrdersActions from "~/store/ducks/orders";

import HeaderComp from "~/components/HeaderComp";

import {
  Container,
  Header,
  HeaderLeft,
  HeaderText,
  OrdersList,
  IconBack
} from "./styles";

class Orders extends Component {
  static propTypes = {
    ordersListRequest: PropTypes.func.isRequired,
    orders: PropTypes.shape({
      data: PropTypes.array
    })
  };

  componentDidMount() {
    const { ordersListRequest } = this.props;
    ordersListRequest();
  }

  handleBackClick = () => {
    const { navigation } = this.props;
    navigation.navigate("Products");
  };

  render() {
    const { orders } = this.props;
    return (
      <Container>
        <HeaderComp
          title="Pizzaria Don Juan"
          IconLeft={IconBack}
          handleLeftClick={() => this.handleBackClick()}
        />

        <OrdersList
          data={orders.data}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <OrderItem order={item} />}
        />
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  orders: state.orders
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(OrdersActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Orders);
