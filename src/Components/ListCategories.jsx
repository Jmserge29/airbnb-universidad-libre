import React from 'react'
import { faFireFlameCurved, faUmbrellaBeach, faBasketballBall, faMountain, faBuilding, faChainBroken, faHouseFlag, faMosque } from '@fortawesome/free-solid-svg-icons'
import ItemCategory from './ItemCategory'

function ListCategories() {

    const categories = [
        {name: "Tendencias", icon: faFireFlameCurved},
        {name: "Playa", icon: faUmbrellaBeach},
        {name: "Deportiva", icon: faBasketballBall},
        {name: "Cabaña", icon: faHouseFlag},
        {name: "Montaña", icon: faMountain},
        {name: "Mansión", icon: faMosque},
        {name: "Oficina", icon: faBuilding},
    ]
  return (
    <div className="w-full inline-flex gap-6 justify-center mt-3">
        {
            categories.map((data, i) => {
                return(
                    <ItemCategory key={i} category={data}/>
                )
            })
        }
    </div>
  )
}

export default ListCategories