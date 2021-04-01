import React from "react";
import ListSkill from "./ListSkill";

function Home() {
  const skill = ["html", "css", "javascript", "React"];
  return (
    <div>
      <h1>Halaman Home</h1>
      <ListSkill skill={skill} />
    </div>
  );
}

export default Home;
