import { useNavigate } from "react-router-dom";
import ItemLogo from "../ItemLogo";
import { signIn } from "../../Api/api";
import { useState } from "react";
function Form() {

    const onBlurEmail =() => {
        seterrors(prevErrors => ({
            ...prevErrors,
            email: email.length < 8 ? " bg-rose-400 text-white" : "",
        }));
    }
  
    const onBlurPassword =() => {
      seterrors(prevErrors => ({
        ...prevErrors,
        password: password.length < 10 ? " bg-rose-400 text-white" : "",
      }));
    }

    const [email, setEmail] = useState([])
    const [password, setPassword] = useState([])
  
    // Validación de Campos
    const [errors, seterrors] = useState(
        [{
          email: "",
          password: "",
        }]
    )

  async function Sign_in() {
    if(password.length > 2 && email.length > 8){
        await signIn(email, password)
    }
  }

  const navigate = useNavigate();
  return (
    <div className=" container mx-auto content-center h-screen bg-no-repeat bg-cover">
      <div className="grid justify-center py-10 rounded-3xl shadow-2xl saturate-200 backdrop-blur-xl mx-40">
        <ItemLogo />
        <div className="text-center my-6">
          <h3 className=" text-4xl font-extrabold mb-2">Iniciar Sesión</h3>
          <p className=" text-base text-stone-800 font-medium">
            Hola, nos da mucho gusto volver a verte!
          </p>
        </div>
        <div className="mb-5">
          <div className="mt-4 space-y-2">
            <label className="block text-stone-800" htmlFor="">
              Correo <span className=" text-rose-600 text-lg font-bold">*</span>
            </label>
            <input
              className="p-2 w-full rounded-2xl pl-5"
              type="email"
              onBlur={onBlurEmail}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder=" JohnDoe@gmail.com"
            />
          </div>
          <div className="mt-4 space-y-2">
            <label className="block text-stone-800" htmlFor="">
              Contraseña{" "}
              <span className=" text-rose-600 text-lg font-bold ">*</span>
            </label>
            <input
              className="p-2 w-full rounded-2xl pl-5"
              onBlur={onBlurPassword}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder=" *********"
            />
          </div>
        </div>
        {
            ( errors.email=="" && errors.password=="") ? "" : <div className=" bg-white rounded-xl mx-auto container p-5 mb-5">
            <p className="text-rose-500 font-black"> Completa adecuadamente los campos requeridos *</p>
          </div>
          }

        <div className=" flex justify-center mb-4">
          <button onClick={Sign_in} className=" py-2 px-4 rounded-2xl bg-rose-400 text-white font-semibold">
            Enviar
          </button>
        </div>
        <span
          className=" block text-center text-gray-500 cursor-pointer "
          onClick={() => navigate("/sign-up")}
        >
          Aún no estás registrado?
        </span>
      </div>
    </div>
  );
}

export default Form;
