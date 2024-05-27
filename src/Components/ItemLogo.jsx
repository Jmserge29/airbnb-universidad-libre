import React from "react";

function ItemLogo() {
  return (
    <>
      <nav className=" flex justify-center content-center items-center mt-3 mb-5">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Escudo_de_la_Universidad_Libre_de_Colombia.svg/512px-Escudo_de_la_Universidad_Libre_de_Colombia.svg.png"
          width={50}
          height={50}
          alt=""
        />
        <h2 className="text-2xl text-rose-600 px-4 values">AirBnB</h2>
      </nav>
    </>
  );
}

export default ItemLogo;
