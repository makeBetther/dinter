import { Empty } from "antd";
import { useState } from "react";
import LogoImg from "../../img/logo.png";
import { ButtonStyle, Container, Error, InputStyle, Logo } from "./SignupStyle";

export function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordConfirmError, setPasswordConfirmError] = useState("");
  const [nameError, setNameError] = useState("");
  const [ageError, setAgeError] = useState("");

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
    if (event.target.value !== "") {
      setEmailError("");
    }
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }
  };
  const onChangePasswordConfirm = (event) => {
    setPasswordConfirm(event.target.value);
    if (event.target.value !== "") {
      setPasswordConfirmError("");
    }
  };
  const onChangeName = (event) => {
    setName(event.target.value);
    if (event.target.value !== "") {
      setNameError("");
    }
  };
  const onChangeAge = (event) => {
    setAge(event.target.value);
    if (event.target.value !== "") {
      setAgeError("");
    }
  };

  const onClickSubmit = () => {
    if (!email) {
      setEmailError("이메일를 입력해주세요.");
    }
    if (!password) {
      setPasswordError("비밀번호를 입력해주세요.");
    }
    if (!passwordConfirm) {
      setPasswordConfirmError("비밀번호 확인을 입력해주세요.");
    }
    if (!name) {
      setNameError("이름을 입력해주세요.");
    }
    if (!age) {
      setAgeError("나이를 입력해주세요.");
    }
    if (email && password && passwordConfirm && name && age) {
      if (password !== passwordConfirm) {
        alert("비밀번호가 같지않습니다");
        return;
      }
      alert("회원이 등록되었습니다.");
      //fetch 날리기
    }
  };
  return (
    <>
      <Container>
        <Logo src={LogoImg} />
        <InputStyle placeholder="이메일" onChange={onChangeEmail} />
        <Error>{emailError}</Error>
        <InputStyle placeholder="비밀번호" onChange={onChangePassword} />
        <Error>{passwordError}</Error>
        <InputStyle
          placeholder="비밀번호 확인"
          onChange={onChangePasswordConfirm}
        />
        <Error>{passwordConfirmError}</Error>
        <InputStyle placeholder="이름" onChange={onChangeName} />
        <Error>{nameError}</Error>
        <InputStyle placeholder="나이" onChange={onChangeAge} />
        <Error>{ageError}</Error>
        <ButtonStyle type="primary" onClick={onClickSubmit}>
          Next
        </ButtonStyle>
        <ButtonStyle type="primary">Back</ButtonStyle>
      </Container>
    </>
  );
}
