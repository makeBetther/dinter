import React, { useState, useEffect } from "react";
import Relationship, { relationshipArr } from "./function/relationshipArrAndButton";
let tempImge = [];
for (let i = 0; i < relationshipArr.length; i++) {
  tempImge[i] = relationshipArr[i][0];
}

const AddORDeleteImage = () => {
  const [tempImage, setTempImage] = useState([]);

  useEffect(() => {
    const initialImages = Array(9).fill("");
    for (let i = 0; i < relationshipArr.length; i++) {
      initialImages[i] = relationshipArr[i][0];
    }
    setTempImage(initialImages);
  }, []);

  // 사진 등록 이벤트 핸들러
  const handleImageUpload = (event, index) => {
    const file = event.target.files[0];

    // 이미지가 존재하지 않는 경우
    if (!file) {
      return;
    }

    // FileReader를 사용하여 이미지를 읽어옴
    const reader = new FileReader();
    reader.onload = () => {
      const imageUrl = reader.result; // 이미지 URL
      const updatedImages = [...tempImage];
      updatedImages[index] = imageUrl;
      setTempImage(updatedImages); // 업데이트된 이미지 배열을 적용
    };
    reader.readAsDataURL(file); // 이미지를 Data URL로 변환
  };

  // 사진 삭제 이벤트 핸들러
  const handleImageDelete = (index) => {
    const updatedImages = tempImage.filter((_, i) => i !== index); // 선택한 인덱스의 이미지를 삭제
    setTempImage(updatedImages); // 업데이트된 이미지 배열을 적용
  };

  return (
    <div>
      {[...Array(9)].map((_, index) => (
        <div key={index}>
          {tempImage[index] && (
            <div>
              <img src={tempImage[index]} alt={`Image ${index + 1}`} />
              <button onClick={() => handleImageDelete(index)}>삭제</button>
            </div>
          )}
          {!tempImage[index] && (
            <div>
              <input type="file" onChange={(event) => handleImageUpload(event, index)} />
              <button>등록</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AddORDeleteImage;