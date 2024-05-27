import ItemLogo from "../ItemLogo";
import { useNavigate } from "react-router-dom";
import {saveUser} from "../../Api/api";
import { useState } from 'react'

function Form() {
  const navigate = useNavigate();
  const [userName, setuserName] = useState([])
  const [email, setEmail] = useState([])
  const [identification, setIdentification] = useState([])
  const [password, setPassword] = useState([])

  // Validación de Campos
  const [errors, seterrors] = useState(
      [{
        identification: "",
        username: "",
        email: "",
        password: "",
      }]
  )

  const onBlurIdentification =() => {
      seterrors(prevErrors => ({
        ...prevErrors,
        identification: identification.length < 7 ? " bg-rose-400 text-white" : "",
      }));
  }

    const onBlurUsername =() => {
      seterrors(prevErrors => ({
        ...prevErrors,
        username: userName.length < 8 ? " bg-rose-400 text-white" : "",
      }));
  }

  const onBlurPassword =() => {
    seterrors(prevErrors => ({
      ...prevErrors,
      password: password.length < 10 ? " bg-rose-400 text-white" : "",
    }));
  }


  async function saveUsersRegister () {
    try {
      if(identification.length > 7 && password.length > 9 && userName.length > 6){
        await saveUser(userName, email, password,  identification);
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className=" container mx-auto content-center h-screen bg-no-repeat bg-cover">
        <div className="grid justify-center py-10 rounded-3xl shadow-2xl saturate-200 backdrop-blur-xl mx-40">
          <ItemLogo />
          <div className="text-center my-6">
            <h3 className=" text-4xl font-extrabold mb-2">Registrar Usuario</h3>
            <p className=" text-base  text-stone-800 font-medium">
              Las nuevas experiencias nos hacen quienes somos, atrevete a más
              con Airbnb
            </p>
            
          </div>
          <div className="mb-5">
            <div className="mt-4 space-y-4">
              <label className="block text-stone-800" htmlFor="">
                Identificación (Cédula){" "}
                <span className=" text-rose-600 text-lg font-bold">*</span>
              </label>
              <input
              value={identification}
              onChange={(e) => setIdentification(e.target.value)}
                className={`p-2 w-full rounded-2xl pl-5 focus:border-blue-500 ${errors.identification}`}
                type="number"
                onBlur={onBlurIdentification}
                placeholder="10400998875"
              />
            </div>
            <div className="mt-4 space-y-4">
              <label className="block text-stone-800" htmlFor="">
                Nombre Usuario{" "}
                <span className=" text-rose-600 text-lg font-bold ">*</span>
              </label>
              <input
                value={userName}
                onBlur={onBlurUsername}
                onChange={(e) => setuserName(e.target.value)}
                className={`p-2 w-full rounded-2xl pl-5 ${errors.username}`}
                type="text"
                placeholder=" Jhon Doe"
              />
            </div>
            <div className="mt-4 space-y-4">
              <label className="block text-stone-800" htmlFor="">
                Correo{" "}
                <span className=" text-rose-600 text-lg font-bold">*</span>
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 w-full rounded-2xl pl-5 ${"
                type="email"
                placeholder=" JohnDoe@gmail.com"
              />
            </div>
            <div className="mt-4 space-y-4">
              <label className="block text-stone-800" htmlFor="">
                Contraseña{" "}
                <span className=" text-rose-600 text-lg font-bold ">*</span>
              </label>
              <input
                value={password}
                onBlur={onBlurPassword}
                onChange={(e) => setPassword(e.target.value)}
                className={`p-2 w-full rounded-2xl pl-5 ${errors.password}`}
                type="password"
                placeholder=" *********"
              />
            </div>
          </div>
          {
            (errors.identification=="" && errors.username=="" && errors.password=="") ? "" : <div className=" bg-white rounded-xl mx-auto container p-5 mb-5">
            <p className="text-rose-500 font-black"> Completa adecuadamente los campos requeridos *</p>
          </div>
          }

          
          <div className=" flex justify-center mb-4">
            <button onClick={saveUsersRegister} className=" py-2 px-4 rounded-2xl bg-indigo-400 text-white font-semibold">
              Enviar
            </button>
          </div>
          <span
            className=" block text-center text-gray-500 cursor-pointer "
            onClick={() => navigate("/sign-in")}
          >
            Ya tienes una cuenta creada?
          </span>
        </div>
      </div>
    </>
  );
}

export default Form;
