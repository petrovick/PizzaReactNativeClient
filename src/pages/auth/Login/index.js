import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import AuthActions from "~/store/ducks/auth";

import { View, Text } from "react-native";

import {
  Container,
  Background,
  TextEmail,
  TextPassword,
  ButtonLogin,
  ButtonLoginText,
  ButtonSignUp,
  ButtonSignUpText,
  LinearGradientBack
} from "./styles";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSignInClick = () => {
    const { signInRequest } = this.props;
    const { email, password } = this.state;
    signInRequest(email, password);
  };

  hadleSignUpClick = () => {
    const { navigation } = this.props;
    navigation.navigate("SignUp");
  };

  render() {
    return (
      <LinearGradientBack colors={["#4c669f", "#3b5998", "#192f6a"]}>
        <Background source={require("~/img/login/background.png")}>
          <Container>
            <TextEmail
              placeholder="Seu e-mail"
              onChangeText={text => this.setState({ email: text })}
            />
            <TextPassword
              placeholder="Senha secreta"
              onChangeText={text => this.setState({ password: text })}
            />
            <ButtonLogin onPress={this.handleSignInClick}>
              <ButtonLoginText>Entrar</ButtonLoginText>
            </ButtonLogin>
            <ButtonSignUp onPress={this.hadleSignUpClick}>
              <ButtonSignUpText>Criar conta gratuita</ButtonSignUpText>
            </ButtonSignUp>
          </Container>
        </Background>
      </LinearGradientBack>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(AuthActions, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Login);
