import { ButtonStyle, Container, InputStyle, Logo } from "./LoginStyle";
import LogoImg from "../../img/logo.png";
import { Link } from "react-router-dom";

export function Login({ getUserLogin }) {
  const onClickLogin = () => {
    getUserLogin(true);
  };

  const onClickSignUp = () => {};
  return (
    <>
      <Container>
        <Logo src={LogoImg} />
        <InputStyle placeholder="Email" />
        <InputStyle placeholder="Password" />
        <ButtonStyle onClick={onClickLogin} type="primary">
          <Link to="/card">Login</Link>
        </ButtonStyle>

        <ButtonStyle onClick={onClickSignUp} type="primary">
          <Link to="/signup">Signup</Link>
        </ButtonStyle>
      </Container>
    </>
  );
}
