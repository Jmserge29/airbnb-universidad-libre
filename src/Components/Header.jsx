import React, { useEffect, useState } from "react";
import ListCategories from "./ListCategories";
import ItemLogo from "./ItemLogo";
import ItemSearch from "./ItemSearch";
import ItemSign from "./ItemSign";
import Cookies from "universal-cookie";
import config from "../../config";
import IconProfile from "./Profile/IconProfile";

function Header({header, handleClick}) {
  console.log("Header : ", header)
  const [sign, setSign] = useState()
  const cookies = new Cookies( { path: '/' });
  useEffect(() => {
    setSign(cookies.get(`${config.SECRET_COOKIE}`))
  }, [])
  console.log(sign)

  return (
    <>
      <div>
        <header className={header ? " fixed drop-shadow-sm top-0 transition w-[100%] bg-white mb-24 h-[170px]" : " h-[250px]" + " p-5  bg-white "}>
          {sign && <IconProfile user={sign}/> }
          <div className={header ? "  hidden " : " " + " flex justify-around"}>
            <ItemLogo />
            <ItemSign sign={sign}/>
          </div>
          {/* Input Search */}
          <ItemSearch header={header}/>
          <hr className="" />
          {/* Categories */}
          <ListCategories handleClick={handleClick} />
        </header>
      </div>
    </>
  );
}

export default Header;
