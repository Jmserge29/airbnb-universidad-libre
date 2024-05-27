import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ItemCategory({category, handler}) {
  return (
    <>
    <div onClick={() => handler(category.name)} className='group rounded-3xl  hover:bg-slate-50 hover:shadow-md cursor-pointer px-2'>
        <div className=' p-2 flex justify-center mt-1 content-center px-2 hover:scale-110 transition duration-150 ease-in-out'>
            <div className=" col-span-1 pl-2 pr-1 font-semibold">{category.name == "*"? "Todo" : category.name }</div>
            <span> <FontAwesomeIcon className='pl-1 pr-2 text-slate-500 group-hover:text-rose-400 transition ease-linear' icon={category.icon}/></span>
        </div>
        <hr className=' mx-5 block group-hover:border-2 invisible group-hover:visible border-rose-400 rounded-xl mb-2 transition ease-linear'/>
    </div>

    </>
  )
}

export default ItemCategory