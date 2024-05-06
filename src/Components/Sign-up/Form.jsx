import ItemLogo from "../ItemLogo";
import { useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();

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
                className="p-2 w-full rounded-2xl pl-5"
                type="number"
                placeholder="10400998875"
              />
            </div>
            <div className="mt-4 space-y-4">
              <label className="block text-stone-800" htmlFor="">
                Nombre Usuario{" "}
                <span className=" text-rose-600 text-lg font-bold ">*</span>
              </label>
              <input
                className="p-2 w-full rounded-2xl pl-5"
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
                className="p-2 w-full rounded-2xl pl-5"
                type="text"
                placeholder=" JohnDoe@gmail.com"
              />
            </div>
            <div className="mt-4 space-y-4">
              <label className="block text-stone-800" htmlFor="">
                Contraseña{" "}
                <span className=" text-rose-600 text-lg font-bold ">*</span>
              </label>
              <input
                className="p-2 w-full rounded-2xl pl-5"
                type="password"
                placeholder=" *********"
              />
            </div>
          </div>
          <div className=" flex justify-center mb-4">
            <button className=" py-2 px-4 rounded-2xl bg-indigo-400 text-white font-semibold">
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
