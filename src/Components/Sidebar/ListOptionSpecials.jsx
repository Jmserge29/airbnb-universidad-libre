import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/solid";
import Option from "./Option";
import Cookies from "universal-cookie";

function ListOptionSpecials() {

  const options = [
    { name: "Sign Out", icon: <ArrowRightStartOnRectangleIcon className=" size-10" /> },
  ];
  return (
    <>
        {options.map((option,idx) => {
          return <Option key={idx} option={option} />;
        })}
    </>
  );
}

export default ListOptionSpecials;
