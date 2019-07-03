import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import OrderItem from "./OrderItem";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import OrdersActions from "~/store/ducks/orders";

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
    navigation: PropTypes.func.isRequired,
    ordersListRequest: PropTypes.func.isRequired,
    orders: PropTypes.shape({
      data: PropTypes.array()
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
        <Header
          source={require("~/img/headerbackground/header-background.png")}
        >
          <HeaderLeft>
            <TouchableOpacity onPress={() => this.handleBackClick()}>
              <IconBack />
            </TouchableOpacity>
            <HeaderText>Pizzaria Don Juan</HeaderText>
          </HeaderLeft>
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
