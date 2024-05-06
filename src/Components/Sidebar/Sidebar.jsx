import React from 'react'
import ListOptions from './ListOptions'
import ListOptionSpecials from './ListOptionSpecials'
import { useNavigate } from 'react-router-dom'

function Sidebar() {
  const navigate = useNavigate()
  return (
    <div className=' flex-col justify-center ml-2  fixed w-[100px] bg-white rounded-xl  shadow-xl backdrop-blur-3xl saturate-200'>
        {/* Credenciales */}
        <div className=' flex mt-8 justify-center mb-4'>
        <img
      className='hover:bg-rose-500 left-7 top-6 cursor-pointer hover:shadow-2xl rounded-3xl p-2 transition-all ease-in-out'
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Escudo_de_la_Universidad_Libre_de_Colombia.svg/512px-Escudo_de_la_Universidad_Libre_de_Colombia.svg.png"
          width={70}
          height={70}
          alt=""
          onClick={() => navigate("/")}

        />
        </div>
        {/* Opciones */}
        <div className='text-center'>
            <ListOptions/>
        </div>
        {/* Funciones especiales */}
        <div>
            <ListOptionSpecials/>
        </div>
    </div>
  )
}

export default Sidebar