import { useNavigate } from 'react-router-dom'
import Form from '../Components/Sign-in/Form'
function Sign_In() {
  const navigate = useNavigate();
  return (
    <div className='  '>
      <img
      className='absolute left-7 top-6 cursor-pointer hover:shadow-2xl rounded-full'
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Escudo_de_la_Universidad_Libre_de_Colombia.svg/512px-Escudo_de_la_Universidad_Libre_de_Colombia.svg.png"
          width={70}
          height={70}
          alt=""
          onClick={() => navigate("/")}

        />
      <div className=''>
        <div className='absolute top-32 left-[375px] transform -translate-x-20 rounded-full size-44 bg-purple-600 blur-xl'></div>
        <div className='absolute top-32 left-[675px] transform -translate-x-20 rounded-full size-32 w-44 bg-rose-400 blur-xl'></div>
        <div className='absolute top-3/4 left-[1535px] transform -translate-x-20 rounded-full size-32 w-44 bg-indigo-500 blur-xl'></div>
        <div className='absolute top-2/4 left-[1375px] transform -translate-x-20 rounded-full size-24 bg-rose-300 blur-lg'></div>
        <Form />
      </div>
    </div>
  )
}

export default Sign_In