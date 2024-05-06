import React, { useState } from "react";
import Categories from "../Components/Property_ID/Categories";
import Image from "../Components/Property_ID/Image";
import Title_Description from "../Components/Property_ID/Title_Description";
import List_Amenaties from "../Components/Property_ID/List_Amenaties";
import Value_Information from "../Components/Property_ID/Value_Information";
import Fuctions from "../Components/Property_ID/Fuctions";
import ButtonLeft from "../Components/ButtonLeft";
import Modal from "../Components/Property_ID/Modal";
function Property_ID() {

  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  return (
    <>
    <ButtonLeft/>
      <div className="max-w-[105rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
          {/* Imagen de la propiedad */}
          <Image/>

          <div className="mt-5 sm:mt-10 lg:mt-0">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-2 md:space-y-4">
              <Title_Description/>
              </div>
              {/* Categorías en la que se encuentra la propiedad  */}
              <Categories/>
              {/* Listado de comodidades */}
              <List_Amenaties/>
              <hr />
              <Value_Information/>
              <hr />
              {/* Botones de las funciones principales */}
              <Fuctions openModal={openModal}/>
              
      <Modal closeModal={closeModal} isOpen={isOpen}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Property_ID;
