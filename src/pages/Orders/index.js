import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import OrderItem from "./OrderItem";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import OrdersActions from "~/store/ducks/orders";

import { Container, Header, HeaderText, OrdersList, IconBack } from "./styles";

class Orders extends Component {
  state = {
    Orders: {
      data: [
        {
          id: 1,
          date: "2019-06-17T17:00:00",
          price: 42.0
        },
        {
          id: 2,
          date: "2019-04-16T16:00:00",
          price: 142.0
        },
        {
          id: 3,
          date: "2019-03-15T09:00:00",
          price: 78.0
        }
      ]
    }
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
        <Header
          source={require("~/img/headerbackground/header-background.png")}
        >
          <TouchableOpacity onPress={() => this.handleBackClick()}>
            <IconBack />
          </TouchableOpacity>
          <HeaderText>Pizzaria Don Juan</HeaderText>
        </Header>
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
