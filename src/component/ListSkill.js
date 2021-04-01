import React from "react";

function ListSkill(props) {
  const skillName = props.skill.map((items, i) => <li key={i}>{items}</li>);
  return (
    <div>
      <ul>{skillName};</ul>
    </div>
  );
}

export default ListSkill;
