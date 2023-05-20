import React, { useEffect, useState } from "react";
import {
  IsLikedButton,
  UserPicture,
  IsPrevPicture,
  IsNextPicture,
} from "./CardsStyle";

const USERS_API = "http://localhost:3004/users"; //q: offset=숫자&limit=10
const LIKE_STATUS_API = "http://localhost:3004/LikeStatus";

const Cards = () => {
  const [randeringUsers, setranderingUsers] = useState([]);
  const [currentUserIndex, setCurrentUserIndex] = useState(0);
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);
  const loginId = JSON.parse(localStorage.getItem("loginId"));
  console.log(loginId);

  async function fetchUserApi() {
    const response = await fetch(USERS_API);
    const body = await response.json();
    setranderingUsers(body);
  }
  function onNextUserButton() {
    setCurrentUserIndex((prevIndex) =>
      prevIndex < randeringUsers.length - 1 ? prevIndex + 1 : 0
    );
  }

  //db에 아이디 없을때도 고려해야됨 5.20 ,
  //프론트에서 좋아요만 정보 넣어주고 매칭은 실시간으로 백에서 해야될듯, 아니면 나랑 관계없는 유저들 업데이트에도 화면 랜더링됨
  //o,x로 유저 넘기면서 fetch된 유저가 더 이상 없을때 유저 더 받기 위해 fetch 요청 -> currentUserIndex === randeringUser.length - 1일때
  //useffect 메모리 비워주기

  // async function onisMathedClick(userId) {
  //   const response = await fetch(`${LIKE_STATUS_API}/${loginId}`);
  //   const body = await response.json();
  //   let getLikeUsers = body["getLike"];
  //   if (!Array.isArray(getLikeUsers)) {
  //     getLikeUsers = [getLikeUsers];
  //   }
  //   if (getLikeUsers.find((user) => user === userId)) {
  //     alert("matching sucess!");
  //     return;
  //   } else {
  //     return;
  //   }
  // }

  async function onGiveLikeButton(userId) {
    const response = await fetch(`${LIKE_STATUS_API}/${loginId}`);
    const body = await response.json();
    let giveLikeUsers = body["giveLike"];
    if (!Array.isArray(giveLikeUsers)) {
      giveLikeUsers = [giveLikeUsers];
    }

    giveLikeUsers = [...new Set(giveLikeUsers)];
    giveLikeUsers = [...giveLikeUsers, userId];

    return fetch(`${LIKE_STATUS_API}/${loginId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ giveLike: giveLikeUsers }),
    });
  }

  async function onGetLikeButton(userId) {
    const response = await fetch(`${LIKE_STATUS_API}/${userId}`);
    const body = await response.json();
    let getLikeUsers = body["giveLike"];
    if (!Array.isArray(getLikeUsers)) {
      getLikeUsers = [getLikeUsers];
    }
    getLikeUsers = [...new Set(getLikeUsers)];
    getLikeUsers = [...getLikeUsers, loginId];

    return fetch(`${LIKE_STATUS_API}/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ getLike: getLikeUsers }),
    });
  }

  useEffect(() => {
    fetchUserApi();
  }, []);

  function onNextClick(user) {
    setCurrentPictureIndex(
      currentPictureIndex < user.photos.length - 1 ? currentPictureIndex + 1 : 0
    );
    console.log(currentPictureIndex);
  }

  function onPrevClick(user) {
    setCurrentPictureIndex(
      currentPictureIndex > 0 ? currentPictureIndex - 1 : user.photos.length - 1
    );
    console.log(currentPictureIndex);
  }

  return (
    <div>
      <ul key={randeringUsers[currentUserIndex]?.id}>
        <li>{randeringUsers[currentUserIndex]?.name}</li>
        <div>
          <div>
            <div style={{ width: 600, height: 630 }}>
              <IsPrevPicture
                onClick={() => onPrevClick(randeringUsers[currentUserIndex])}
              >
                prev
              </IsPrevPicture>
              <IsNextPicture
                onClick={() => onNextClick(randeringUsers[currentUserIndex])}
              >
                next
              </IsNextPicture>
              <UserPicture
                src={
                  randeringUsers[currentUserIndex]?.photos[currentPictureIndex]
                    ?.URL
                }
                alt={
                  randeringUsers[currentUserIndex]?.photos[currentPictureIndex]
                    ?.filename
                }
              ></UserPicture>
            </div>

            <IsLikedButton onClick={onNextUserButton}>X</IsLikedButton>
            <IsLikedButton
              onClick={() => {
                onGiveLikeButton(randeringUsers[currentUserIndex]?.id);
                onGetLikeButton(randeringUsers[currentUserIndex]?.id);
                onNextUserButton();
                //onisMathedClick(user.id)
              }}
            >
              O
            </IsLikedButton>
          </div>
        </div>
        <li>{randeringUsers[currentUserIndex]?.gender}</li>
        <li>{randeringUsers[currentUserIndex]?.relationship}</li>
        <li>{randeringUsers[currentUserIndex]?.intro}</li>
      </ul>
    </div>
  );
};

export default Cards;
