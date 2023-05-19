import React from "react";
import iphoneEmo1 from '../array/RelationshipIcon/iphoneEmo-1.png';
import iphoneEmo2 from '../array/RelationshipIcon/iphoneEmo-2.png';
import iphoneEmo3 from '../array/RelationshipIcon/iphoneEmo-3.png';
import iphoneEmo4 from '../array/RelationshipIcon/iphoneEmo-4.png';
import iphoneEmo5 from '../array/RelationshipIcon/iphoneEmo-5.png';
import iphoneEmo6 from '../array/RelationshipIcon/iphoneEmo-6.png';

const relationshipArr = [
  [iphoneEmo1, '진지한 연애'],
  [iphoneEmo2, '진재한 연애를 찾지만 캐주얼해도 괜찮음'],
  [iphoneEmo3, '캐주얼한 연애를 찾지만 진지해도 괜찮음'],
  [iphoneEmo4, '캐주얼하게 만날 친구'],
  [iphoneEmo5, '새로운 동네 친구'],
  [iphoneEmo6, '아직 모르겠음'],
];

function Relationship({ array }) {
  function handleButtonClick(index) {
    alert(index);
  }

  function relationshipToButton(array) {
    return array.map((item) => (
      <button key={item[1]} onClick={() => handleButtonClick(item[1])}>
        <img src={item[0]} alt={item[1]} /> {item[1]}
      </button>
    ));
  }

  return <div>{relationshipToButton(array)}</div>;
}

export default Relationship;
export { relationshipArr };
