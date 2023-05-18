import React, { useEffect, useState } from "react";

const API = "http://localhost:3004/users";

const Cards = () => {
  const [users, setUsers] = useState([]);

  async function fetchUserApi() {
    const response = await fetch(API);
    const body = await response.json();
    setUsers(body);
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
            <img src={user.photos.map((pic) => pic.URL)}></img>
            <li>{user.gender}</li>
            <li>{user.relationship}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default Cards;
