import React, { useState, useRef } from "react";
import { Logo } from "./SignupImageStyle";
import { ButtonStyle, Container } from "./SignupImageStyle";

import LogoImg from "../../img/logo.png";
export function SignupImage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setSelectedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <Container>
      <Logo src={LogoImg} />
      <div
        style={{
          width: "80%",
          height: "400px",
          border: "2px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          marginBottom: "15px",
        }}
        onClick={handleClick}
      >
        {selectedImage ? (
          <img
            src={selectedImage}
            alt="Selected"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        ) : (
          <span>+</span>
        )}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImageUpload}
          style={{ display: "none" }}
        />
      </div>
      <ButtonStyle>Next</ButtonStyle>
    </Container>
  );
}
