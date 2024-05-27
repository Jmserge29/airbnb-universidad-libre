import { useNavigate } from 'react-router-dom'

function IconGeneral() {
    const navigate = useNavigate();
  return (
    <div>
    <img
      className='fixed left-7 top-6 cursor-pointer hover:bg-rose-500 bg-white drop-shadow-2xl hover:shadow-2xl rounded-2xl hover:rounded-3xl p-2 transition-all ease-in-out'
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Escudo_de_la_Universidad_Libre_de_Colombia.svg/512px-Escudo_de_la_Universidad_Libre_de_Colombia.svg.png"
          width={80}
          height={80}
          alt=""
          onClick={() => navigate("/")}

        />

    </div>
  )
}

export default IconGeneral