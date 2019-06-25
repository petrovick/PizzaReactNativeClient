import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import OrderItem from "./OrderItem";

import { Container, Header, HeaderText, OrdersList, IconBack } from "./styles";

export default class Orders extends Component {
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

  handleBackClick = () => {
    const { navigation } = this.props;
    navigation.navigate("Products");
  };

  render() {
    const { Orders } = this.state;
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
          data={Orders.data}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <OrderItem order={item} />}
        />
      </Container>
    );
  }
}
