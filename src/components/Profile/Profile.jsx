import React, { useState } from "react";
import interestsArr from "./array/interestsArr";
import Relationship, { relationshipArr } from "./relationshipArrAndButton"
import languagesArr from "./array/languagesArr"
import ArrayToButton from "./arrToButton";


function Profile() {

  function Introduction() {
    const [introduce, setIntroduce] = useState('');
    const remainingChars = 500 - introduce.length;

    function onIntroductionChange(event) {
      setIntroduce(event.target.value);
    }

    return (
      <div>
        <input type="text" maxLength={500} onChange={onIntroductionChange} />
        <span>{remainingChars}</span>
      </div>
    );
  }

  return (
    <div>
      <div>
        <h2>프로필 수정</h2>
        <button type="submit">완료</button>
      </div>
      <div>
        <h4>콘텐츠</h4>
        <div></div>
      </div>
      <div>
        <h4>자기소개</h4>
        <Introduction></Introduction>
      </div>
      <div>
        <h4>관심사</h4>
        <ArrayToButton array={interestsArr} />
      </div>
      <div>
        <h4>내가 찾는 관계</h4>
        <Relationship array={relationshipArr} />
        <div>
          80% 모달
          <div>
            <span> </span>
          </div>
        </div>
      </div>
      <div>
        <h4>언어 추가하기</h4>
        <ArrayToButton array={languagesArr} />
        <div>
          <p>80% 모달</p>
        </div>
      </div>
      <div>
        <h4>직함</h4>
        <input placeholder="현재 하시는 일을 입력하세요" />
      </div>
      <div>
        <h4>직장</h4>
        <input placeholder="소속된 단체 또는 회사를 입력하세요" />
      </div>
      <div>
        <h4>거주지역</h4>
        <div>100% 모달</div>
      </div>
      <div>
        <h4>성별</h4>
        <div>100% 모달</div>
      </div>
    </div>
  );
}

export default Profile;
