import { Fragment, useState } from "react";
import IconProfile from "../../Components/Profile/IconProfile";
import IconGeneral from "../../Components/IconGeneral";
import HeaderDetail from "../../Components/Profile/HeaderDetail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseCircleCheck } from "@fortawesome/free-solid-svg-icons";
import ModalProperty from "../../Components/Modals/ModalProperty";
function Client() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }


  const user = {
    cedula: 10422514896,
    nombre: "Jhon Doe Dev",
    email: "jhondoedev@gmail.com",
    picture: "",
    numero_tarjeta: "",
    contraseña: "$2a$10$A6G0z2.t7zpis1LzTwUCU.MuwO2/l7o0qt52Q72Koadh5fKRcsiei",
    estado: 1,
    roleId: "3BB446190C1B11EF8C60581122455C8A",
    createdAt: "Saturday, May 11, 2024 10:19 AM",
  };

  return (
    <>
      <IconGeneral />
      <IconProfile user={user} />
      <HeaderDetail user={user} />

      <div className=" flex-col space-y-4 min-w-screen pt-5 animated flex justify-center items-center inset-0 z-50 outline-none focus:outline-none ">
        <div className="flex flex-col p-8 bg-white shadow-md hover:shodow-lg rounded-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FontAwesomeIcon
                className=" size-12 ml-3 text-rose-500"
                icon={faHouseCircleCheck}
              />
              <div className="flex flex-col ml-3">
                <div className="font-medium leading-none">
                  Crear una Propiedad
                </div>
                <p className="text-sm text-gray-600 leading-none mt-1">
                  Ingrese los datos correspondientes para la creación de una
                  propiedad
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(true)}
              className="flex-no-shrink bg-rose-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-rose-500 text-white rounded-full"
            >
              Crear
            </button>
          </div>
        </div>
      </div>
      <ModalProperty isOpen={isOpen} closeModal={closeModal} />
    </>
  );
}

export default Client;
