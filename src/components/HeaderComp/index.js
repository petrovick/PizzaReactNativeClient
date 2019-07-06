import React from "react";
import { TouchableOpacity } from "react-native";
import { default as NumberFormat } from "react-number-format";

import { Header, HeaderLeft, HeaderText, TotalPriceText } from "./styles";

const HeaderComp = ({
  title,
  price,
  IconLeft,
  IconRight,
  handleRightClick,
  handleLeftClick
}) => (
  <Header source={require("~/img/headerbackground/header-background.png")}>
    <HeaderLeft>
      {handleLeftClick && IconLeft && (
        <TouchableOpacity onPress={() => handleLeftClick()}>
          <IconLeft />
        </TouchableOpacity>
      )}
      <HeaderText>{title}</HeaderText>
    </HeaderLeft>
    {handleRightClick && IconRight && (
      <TouchableOpacity onPress={() => handleRightClick()}>
        <IconRight />
      </TouchableOpacity>
    )}
    {price > 0 && (
      <NumberFormat
        value={parseFloat(price)}
        displayType={"text"}
        thousandSeparator="."
        decimalScale={2}
        prefix={"R$ "}
        decimalSeparator=","
        renderText={value => <TotalPriceText>{value}</TotalPriceText>}
      />
    )}
  </Header>
);

export default HeaderComp;
