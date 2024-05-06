import Form from "../Components/Sign-up/Form.jsx";
import { useNavigate } from "react-router-dom"

function Sign_up() {
    const navigate = useNavigate()

  return (
    <div className="  ">
      <img
        className="absolute left-7 top-6 cursor-pointer hover:shadow-2xl rounded-full"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Escudo_de_la_Universidad_Libre_de_Colombia.svg/512px-Escudo_de_la_Universidad_Libre_de_Colombia.svg.png"
        width={70}
        height={70}
        alt=""
        onClick={() => navigate("/")}
      />
      <div className="">
        <Form />
      </div>
    </div>
  );
}

export default Sign_up;
