import { useNavigate } from "react-router-dom"
import ItemLogo from "../ItemLogo"
function Form() {
    const navigate = useNavigate()
  return (
    <div className=" container mx-auto content-center h-screen bg-no-repeat bg-cover" >
        <div className='grid justify-center py-10 rounded-3xl shadow-2xl saturate-200 backdrop-blur-xl mx-40' >
            <ItemLogo/>
            <div className='text-center my-6'>
                <h3 className=' text-4xl font-extrabold mb-2'>Iniciar Sesión</h3>
                <p className=' text-base text-stone-800 font-medium'>Hola, nos da mucho gusto volver a verte!</p>
            </div>
            <div className='mb-5'>
                <div className='mt-4 space-y-2'>
                    <label className='block text-stone-800' htmlFor="">Correo <span className=' text-rose-600 text-lg font-bold'>*</span></label>
                    <input className='p-2 w-full rounded-2xl pl-5' type="text" placeholder=' JohnDoe@gmail.com'/>
                </div>
                <div className='mt-4 space-y-2'>
                    <label className='block text-stone-800' htmlFor="">Contraseña <span className=' text-rose-600 text-lg font-bold '>*</span></label>
                    <input className='p-2 w-full rounded-2xl pl-5' type="password" placeholder=' *********'/>
                </div>
            </div>
            <div className=' flex justify-center mb-4'>
                <button  className=' py-2 px-4 rounded-2xl bg-rose-400 text-white font-semibold'>Enviar</button>
            </div>
            <span className=' block text-center text-gray-500 cursor-pointer ' onClick={() => navigate('/sign-up')}>Aún no estás registrado?</span>
        </div>
    </div>
  )
}

export default Form