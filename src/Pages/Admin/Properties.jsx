import React, { useState, useEffect } from "react";
import { getProperties } from "../../Api/api";
import PropertyAdmin from "../../Components/PropertyAdmin";
function Properties() {

  const [props, setProps] = useState([])
  async function loadDataProperties() {
    try {
      setProps(await getProperties());
    } catch (error) {
      console.log("No se pudo cargar la información de los usuarios")
    }
  }

  useEffect(() => {
    loadDataProperties();
  },  [])

  return (
      <div class="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 space-y-4 md:space-y-0">
        {props ? props.map((data) => {
          return(
            <PropertyAdmin key={data.id} data={data}/>
          )
        }) : "No se han encontrado los datos de las propiedades"}
      </div>
  );
}

export default Properties;
