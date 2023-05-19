import React, { useEffect, useState } from "react";

const USERS_API = "http://localhost:3004/users"; //q: offset=숫자&limit=10
const GIVE_LIKE_STATUS_API = "http://localhost:3004/giveLikeUsers";
const GET_LIKE_STATUS_API = "http://localhost:3004/getLikeUsers";

const Cards = () => {
  const [users, setUsers] = useState([]);
  const loginId = JSON.parse(localStorage.getItem("loginId"));
  console.log(loginId);

  async function fetchUserApi() {
    const response = await fetch(USERS_API);
    const body = await response.json();
    setUsers(body);
  }

  async function onisMathedClick(userId) {
    const response = await fetch(`${GET_LIKE_STATUS_API}/${loginId}`);
    const body = await response.json();
    let getLikeUsers = body["getLike"];
    if (!Array.isArray(getLikeUsers)) {
      getLikeUsers = [getLikeUsers];
    }
    if (getLikeUsers.find((user) => user === userId)) {
      alert("matching sucess!");
      return;
    } else {
      return;
    }
  }

  async function onGiveLikeButton(userId) {
    const response = await fetch(`${GIVE_LIKE_STATUS_API}/${loginId}`);
    const body = await response.json();
    let giveLikeUsers = body["giveLike"];
    if (!Array.isArray(giveLikeUsers)) {
      giveLikeUsers = [giveLikeUsers];
    }

    giveLikeUsers = [...new Set(giveLikeUsers)];
    giveLikeUsers = [...giveLikeUsers, userId];

    return fetch(`${GIVE_LIKE_STATUS_API}/${loginId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ giveLike: giveLikeUsers }),
    });
  }

  async function onGetLikeButton(userId) {
    const response = await fetch(`${GET_LIKE_STATUS_API}/${userId}`);
    const body = await response.json();
    let getLikeUsers = body["giveLike"];
    if (!Array.isArray(getLikeUsers)) {
      getLikeUsers = [getLikeUsers];
    }
    getLikeUsers = [...new Set(getLikeUsers)];
    getLikeUsers = [...getLikeUsers, loginId];

    return fetch(`${GET_LIKE_STATUS_API}/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ getLike: getLikeUsers }),
    });
  }

  console.log(users);

  useEffect(() => {
    fetchUserApi();
  }, []);

  return (
    <div>
      {users.map((user) => {
        return (
          <ul key={user.id}>
            <li>{user.name}</li>
            <div>
              {user.photos.map((pic) => {
                return <img src={pic.URL} alt="pic.filename"></img>;
              })}
              <button>X</button>
              <button
                onClick={() => {
                  onGiveLikeButton(user.id);
                  onGetLikeButton(user.id);
                  onisMathedClick(user.id);
                }}
              >
                O
              </button>
            </div>
            <li>{user.gender}</li>
            <li>{user.relationship}</li>
            <li>{user.intro}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default Cards;
