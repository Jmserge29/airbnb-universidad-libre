import { StarIcon } from '@heroicons/react/24/solid'
import { StarIcon as StraIconOut } from '@heroicons/react/24/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { stringify } from 'postcss';
import { useNavigate } from "react-router-dom";
function Property({data}) {
  const navigate = useNavigate()
  return (
    <div className='group columns-1 mx-3 mb-8 hover:bg-white hover:shadow-lg hover:shadow-rose-300 transition rounded-xl p-2 cursor-pointer' onClick={() => navigate(`property/${data._id}`)}>
      <div className=' flex justify-center'>
        <img className=' rounded-xl max-h-44 bg-cover w-full' src={data.picture} alt="" />
      </div>
      <div className='mx-4 mt-1'>
        <div className='flex justify-between font-semibold'>
          <h3 className='text-base mt-1 leading-5 '>{data.name}</h3>
          <span className='flex items-center content-center place-items-center px-2'>{data.calification} <StraIconOut className='text-rose-400 hover:cursor-pointer ml-2 size-5'/></span>
        </div>
        <div className=' text-[15px] pt-2 text-center text-gray-500 leading-4 pb-5'>
          <p className=''>A 20 Kilómetros de distancia.</p>
          <span className='values text-lg text-rose-500'>$ {data.value} COP</span> la Noche.
        </div>
      </div>
    </div>
  )
}

export default Property;