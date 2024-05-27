import { Dialog, Transition, RadioGroup } from "@headlessui/react";
import { Fragment, useState } from "react";
import { uploadFile } from "../../../firebase";
import { createProperty } from "../../Api/api";
function ModalProperty({ isOpen,closeModal}) {
    const [nombre, setNombre] = useState("");
    const [ubicacion, setUbicacion] = useState("");
    const [capacidad, setCapacidad] = useState("");
    const [valor, setValor] = useState("");
    const [comodidades, setComodidades] = useState("");
    const [imageSrc, setImageSrc] = useState(null);
    let [plan, setPlan] = useState("Oficina");    
    let [varFile, setVarFile] = useState();


    const categories = [
        {name: "Tendencias"},
        {name: "Playa"},
        {name: "Deportiva"},
        {name: "Cabaña"},
        {name: "Montaña"},
        {name: "Mansión"},
        {name: "Oficina"},
    ]

    const handleImageChange = async(event) => {
        const file = event.target.files[0];
        if (file) {
          // Crear una URL para el archivo seleccionado
          const imageURL = URL.createObjectURL(file);
          setImageSrc(imageURL);
          setVarFile(file)          

        }
      };

      const handlerCreateProperty = async() => {
          let response
          try {
              response = await uploadFile(varFile)
              console.log(response)
              alert("Cargando Datos")            
          } catch (error) {
            console.log(error)
            alert("Error al subir datos")
          }  
          setTimeout(async() => {
            try {
                await createProperty({imageSrc: response,nombre,ubicacion,categoria: plan,capacidad,valor,comodidades});
            } catch (error) {
                console.log(error)
            }
        }, 4000);
      }    

  return (
    <>
          <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-semibold leading-6 text-gray-900"
                  >
                    Nueva Propiedad
                  </Dialog.Title>
                  <form>
                    <div className="grid sm:grid-cols-12 mt-5 gap-2 sm:gap-6">
                      <div className="sm:col-span-3">
                        <label className="inline-block text-sm text-gray-800 mt-2.5 ">
                          Foto de la propiedad
                        </label>
                      </div>

                      <div className="sm:col-span-9">
                        <div className="flex items-center gap-5">
                          <img
                            className="inline-block size-20 rounded-full ring-2 ring-white "
                            src={imageSrc ? imageSrc : "https://static.thenounproject.com/png/4974686-200.png"}
                            alt="Image Description"
                          />
                          <label className="flex bg-blue-600 font-semibold hover:bg-blue-500 text-white text-base px-4 py-2 rounded-xl cursor-pointer">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-6 mr-2 fill-white inline"
                              viewBox="0 0 32 32"
                            >
                              <path
                                d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                                data-original="#000000"
                              />
                              <path
                                d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                                data-original="#000000"
                              />
                            </svg>
                            Upload
                            <input
                              type="file"
                              id="uploadFile1"
                              className="hidden"
                              onChange={handleImageChange}
                            />
                          </label>{" "}
                        </div>
                      </div>

                      <div className="sm:col-span-3">
                        <label className="inline-block text-sm text-gray-800 mt-2.5 ">
                          Nombre
                        </label>
                      </div>

                      <div className="sm:col-span-9">
                        <input
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                          type="text"
                          className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none   "
                          placeholder="Cabaña Aguas Cristales"
                        />
                      </div>
                      <div className="sm:col-span-3">
                        <label className="inline-block text-sm text-gray-800 mt-2.5 ">
                          Ubicación
                        </label>
                      </div>

                      <div className="sm:col-span-9">
                        <input
                          type="text"
                          value={ubicacion}
                          onChange={(e) => setUbicacion(e.target.value)}  
                          className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none   "
                          placeholder="Barranquilla, Atlántico"
                        />
                      </div>

                      <div className="sm:col-span-3">
                        <label className="inline-block text-sm text-gray-800 mt-2.5 ">
                          Valor Propiedad (COP)
                        </label>
                      </div>

                      <div className="sm:col-span-9">
                        <input
                            value={valor}
                            onChange={(e) => setValor(e.target.value)}                        
                          type="number"
                          className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-base rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none values  "
                          placeholder="$ 199,999"
                        />
                      </div>

                      
                      <div className="sm:col-span-3">
                        <label className="inline-block text-sm text-gray-800 mt-2.5 ">
                          Capacidad N° Huespedes
                        </label>
                      </div>

                      <div className="sm:col-span-9">
                        <input
                          type="number"
                          value={capacidad}
                          onChange={(e) => setCapacidad(e.target.value)}  
                          className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-base rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none values  "
                          placeholder="9"
                        />
                      </div>

                      <div className="sm:col-span-3">
                        <label className="inline-block text-sm text-gray-800 mt-2.5 ">
                          Categoría
                        </label>
                      </div>

                      <div className="sm:col-span-9 flex w-full">
                        <RadioGroup
                          className={
                            "flex justify-center items-center space-x-3"
                          }
                          value={plan}
                          onChange={setPlan}
                        >
                            {categories.map((cate) => {
                                return(
                                    <RadioGroup.Option key={cate.name} value={cate.name}>
                                    {({ checked }) => (
                                      <span
                                        className={
                                          checked
                                            ? "bg-blue-600 text-white rounded-lg px-6 py-3 font-semibold"
                                            : " bg-white font-semibold block px-6 py-3 rounded-md text-gray-950 shadow-2xl cursor-pointer"
                                        }
                                      >
                                        {cate.name}
                                      </span>
                                    )}
                                  </RadioGroup.Option>        
                                )
                            })}
                        </RadioGroup>{" "}
                      </div>

                      <div className="sm:col-span-3">
                        <label
                          for="af-account-bio"
                          className="inline-block text-sm text-gray-800 mt-2.5 "
                        >
                          Comodidades / Descripción
                        </label>
                      </div>
                      <div className="sm:col-span-9">
                        <textarea
                                value={comodidades}
                            onChange={(e) => setComodidades(e.target.value)}                          
                          id="af-account-bio"
                          className=" shadow-lg py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none   "
                          rows="6"
                          placeholder="Type your message..."
                        ></textarea>
                      </div>
                    </div>
                  </form>

                  <div className="mt-4 flex justify-center">
                    <button
                      type="button"
                      className="inline-flex justify-center font-semibold rounded-md border border-transparent bg-rose-400 px-4 py-2 text-sm text-white hover:bg-rose-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={handlerCreateProperty}
                    >
                      Crear Propiedad!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

    </>
  )
}

export default ModalProperty