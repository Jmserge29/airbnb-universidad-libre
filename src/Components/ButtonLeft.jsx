import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

function ButtonLeft() {
  const navigate = useNavigate()

  return (
    <div className=" pt-4 pl-4" onClick={() => navigate("/")}>
    <FontAwesomeIcon
      className="rounded-full p-5 text-slate-500 hover:text-rose-400 bg-white transition ease-linear cursor-pointer"
      size="2x" 
      icon={faAnglesLeft}
    />
</div>

  )
}

export default ButtonLeft