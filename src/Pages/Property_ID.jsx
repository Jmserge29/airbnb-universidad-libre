import React, { useEffect, useState } from "react";
import { MapPinIcon, TagIcon, UserGroupIcon } from "@heroicons/react/20/solid";
import { useParams } from "react-router-dom";
import IconGeneral from "../Components/IconGeneral";
import { getProp } from "../Api/api";
import Swal from 'sweetalert2'
import Cookies from "universal-cookie";
import config from "../../config";

function Property_ID() {
  const cookies = new Cookies( { path: '/' });
  let [isOpen, setIsOpen] = useState(false);
  const [prop, setProp] = useState([])
  const {id} = useParams()

  async function loadDataProperty() {
    try {
      setProp(await getProp(id));
    } catch (error) {
      console.log("No se pudo cargar la información de los usuarios")
    }
  }

  const [reserva, setReserva] = useState(() => {
    // Intentamos obtener la reserva del localStorage
    const reservaGuardada = localStorage.getItem('reserva');
    // Si existe, la parseamos a JSON y la devolvemos, de lo contrario devolvemos un array vacío
    return reservaGuardada ? JSON.parse(reservaGuardada) : [];
  });

  // Función para manejar la actualización de la reserva
  const actualizarReserva = (nuevoElemento) => {
    // Creamos una nueva reserva combinando el elemento nuevo con los existentes
    const nuevaReserva = [...reserva, nuevoElemento];
    // Actualizamos el estado y también guardamos en el localStorage
    setReserva(nuevaReserva);
    localStorage.setItem('reserva', JSON.stringify(nuevaReserva));
    Swal.fire({
      title: `Se reservó correctamente!`,
      html: `Disfruta tu estancia en <b>${nuevoElemento.nombre}</b>!`,
      icon: "success"
    });
  };

  useEffect(() => {
    loadDataProperty();
  },  [reserva])


  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const usuario = cookies.get(`${config.SECRET_COOKIE}`);
  useEffect(() => {
  }, [])


  return (
    <>
    <IconGeneral/>
      <section className="flex h-screen text-gray-700 content-center items-center">
        <div className="flex container px-12 py-24 mx-auto w-full bg-white rounded-3xl">
          <div className="lg:w-[100%] mx-l flex w-full">
            <img
              alt="ecommerce"
              width={"60%"}
              height={"60%"}
              className=" bg-cover rounded-2xl object-cover object-center border border-gray-200"
              src={prop.picture ? prop.picture : "https://t3.ftcdn.net/jpg/04/60/01/36/360_F_460013622_6xF8uN6ubMvLx0tAJECBHfKPoNOR5cRa.jpg"}
            />
            <div className="lg:w-[100%] mx-3 py-5 content-center items-center text-center rounded-3xl bg-slate-50 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-white text-5xl  rounded-xl py-3 bg-rose-500 text-center values mb-1">
                {prop ? prop.nombre : "Cargando"}
              </h1>

              <div className="flex my-4 pt-3 space-x-4">
                <span className=" rounded-xl px-3 py-2 bg-teal-100 flex items-center font-semibold">
                  <MapPinIcon className="size-8 text-teal-800 mr-2" />{" "}
                  {prop ? prop.ubicacion : "Cargando"}
                </span>
                <span className=" rounded-xl px-3 py-2 bg-amber-100 text-2xl flex items-center values">
                  <UserGroupIcon className="size-8 text-rose-500 mr-2" /> {prop ? prop.capacidad : "#"}
                </span>
                <span className=" rounded-xl px-3 py-2 bg-indigo-200 text-gray-950 flex items-center font-semibold">
                  <TagIcon className="size-8 text-indigo-700 mr-2" />{" "}
                  {prop ? prop.categoria : "Cargando"}
                </span>

              </div>
              <p className="leading-relaxed mx-12 font-semibold text-black">
                {prop ? prop.comodidades : "Cargando"}
              </p>
              <div className="flex mt-2 items-center pb-5 border-b-2 border-slate-200 mb-5">
              </div>
              <div className="flex">
                <span className="title-font font-medium text-5xl text-rose-500 values">
                  $ {prop ? prop.valor : "Cargando"} 
                </span>
                
                <button onClick={() => !usuario ? Swal.fire({
                icon: "error",
                title: "Inicie Sesión Antes de Realizar una reserva",
                html: `Antes de reservar una propiedad debes realizar el registro de tu cuenta o iniciar sesión si ya cuentas con una, mucha suerte!`,
            }): actualizarReserva(prop)} className="flex content-center items-center ml-auto font-semibold mr-5 text-white bg-rose-500 py-2 px-6 focus:outline-none transition-all hover:bg-rose-300 rounded-xl">
                  Reservar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>

      </div>
    </>
  );
}

export default Property_ID;
