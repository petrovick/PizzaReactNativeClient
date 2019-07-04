import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import AuthActions from "~/store/ducks/auth";

import { View, Text } from "react-native";

import {
  Container,
  Background,
  TextName,
  TextEmail,
  TextPassword,
  ButtonSignUp,
  ButtonSignUpText
} from "./styles";

class SignUp extends Component {
  /*
  static propTypes = {
    signUpRequest: PropTypes.func.isRequired
  };
  */
  state = {
    name: "",
    email: "",
    password: ""
  };

  hadleSignUpClick = () => {
    const { name, email, password } = this.state;
    const { signUpRequest } = this.props;
    signUpRequest(name, email, password);
  };

  render() {
    return (
      <Background source={require("~/img/login/background.png")}>
        <Container>
          <TextName
            placeholder="Nome completo"
            onChangeText={text => this.setState({ name: text })}
          />
          <TextEmail
            placeholder="Seu e-mail"
            onChangeText={text => this.setState({ email: text })}
          />
          <TextPassword
            placeholder="Senha secreta"
            onChangeText={text => this.setState({ password: text })}
          />
          <ButtonSignUp onPress={this.hadleSignUpClick}>
            <ButtonSignUpText>Entrar</ButtonSignUpText>
          </ButtonSignUp>
        </Container>
      </Background>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(AuthActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
