import React, { useState } from "react";

function Tentang() {
  const [angka, setAngka] = useState(0);
  function tambah() {
    setAngka(angka + 1);
  }
  function kurang() {
    if (angka > 0) {
      setAngka(angka - 1);
    }
  }
  return (
    <div>
      <h1>Halaman Tentang</h1>
      <h1>angka : {angka}</h1>

      <button type="button" onClick={tambah}>
        tambah
      </button>

      <button type="button" onClick={kurang}>
        kurang
      </button>
    </div>
  );
}

export default Tentang;
