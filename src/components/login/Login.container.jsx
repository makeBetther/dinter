import { ButtonStyle, Container, InputStyle, Logo } from "./Login.style";

import LogoImg from "../../img/logo.png";
export function Login() {
  const onClickLogin = () => {
    alert("로그인창으로이동");
  };

  const onClickSignUp = () => {
    alert("회원가입창이동");
  };
  return (
    <Container>
      <Logo src={LogoImg} />
      <InputStyle placeholder="Email" />
      <InputStyle placeholder="Password" />
      <ButtonStyle onClick={onClickLogin} type="primary">
        Login
      </ButtonStyle>
      <ButtonStyle onClick={onClickSignUp} type="primary">
        Sign Up
      </ButtonStyle>
    </Container>
  );
}
