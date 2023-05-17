import styled from "@emotion/styled";
import { Button, Input } from "antd";

export const Logo = styled.img`
  width:200px;
  height:100px; 
  margin-bottom:70px;  
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height:100vh;
`
export const InputStyle = styled(Input)`
  
  width:70%;
  height:70px;
  font-size:20px;
  border-radius:300px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  text-align: center;
`

export const ButtonStyle = styled(Button)`
  
  width:70%;
  height:70px;
  font-size:20px;
  border-radius:300px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  background-color:pink;
`
