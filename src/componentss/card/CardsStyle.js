import styled from "@emotion/styled";

export const IsLikedButton = styled.button`
  width: 50px;
  height: 50px;
  font-size: 20px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 0px;
  margin-bottom: 20px;
`;
export const UserPicture = styled.img`
  width: 500px;
  height: 600px;
  margin: 0 auto;
`;

export const IsPrevPicture = styled.button`
  cursor: pointer;
  border: 5px red solid;
  background-color: rgba(0, 0, 0, 0);
  position: absolute;
  width: 230px;
  height: 600px;
  top: 35px;
  left: 100;
  z-index: 1;
  margin: 0;
  padding: 0;
`;

export const IsNextPicture = styled.button`
  cursor: pointer;
  border: 5px red solid;
  background-color: rgba(0, 0, 0, 0);
  position: absolute;
  width: 230px;
  height: 600px;
  top: 35px;
  left: 310px;
  z-index: 1;
  margin: 0;
  padding: 0;
`;
