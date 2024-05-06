import React, { useEffect, useState } from "react";
import ListCategories from "./ListCategories";
import ItemLogo from "./ItemLogo";
import ItemSearch from "./ItemSearch";
import ItemSign from "./ItemSign";

function Header({header}) {

  console.log("Header : ", header)
  return (
    <>
      <div>
        <header className={header ? " fixed drop-shadow-sm top-0 transition w-[100%] bg-white mb-24 h-[170px]" : " h-[233px]" + " p-5  bg-white "}>
          <div className={header ? "  hidden " : " " + " flex justify-around"}>
            <ItemLogo />
            <ItemSign />
          </div>
          {/* Input Search */}
          <ItemSearch header={header}/>
          <hr className="" />
          {/* Categories */}
          <ListCategories />
        </header>
      </div>
    </>
  );
}

export default Header;
