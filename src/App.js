import { Login } from "./componentss/login/LoginContainer";
import { Signup } from "./componentss/signup/SignupContainer";
import { SignupImage } from "./componentss/signup/SignupImageContainer";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import Cards from "./componentss/card/Cards";
import "./App.css";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const getUserLogin = (isLoggedIn) => {
    setIsLoggedIn(isLoggedIn);
    console.log(isLoggedIn);
  };

  return (
    <BrowserRouter>
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/" element={<Cards />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        ) : (
          <>
            <Route
              exact
              path="/"
              element={<Login getUserLogin={getUserLogin} />}
            />
            <Route path="/signupimage" element={<SignupImage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
