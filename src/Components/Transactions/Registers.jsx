import { ArrowUpCircleIcon, ArrowDownCircleIcon, ArrowPathIcon  } from '@heroicons/react/24/solid'
import React from 'react'

function Registers() {
  return (
    <div className=' bg-white rounded-xl shadow-md py-5'>
        <div className=' font-semibold text-gray-900 py-3 bg-slate-50 border-b-2'>
            <h4 className='ml-8'>Historial de pagos</h4>
        </div>
        <div className=' grid grid-cols-3 pt-3 px-5  border-b pb-2'>
            {/* Value */}
            <div className=' col-span-1 flex items-center'>
              <div>
                <ArrowUpCircleIcon className='size-8 text-emerald-500 mr-2'/>
              </div>
              <div className=' values text-gray-700'>
                $ 10000 COP
              </div>
              <span className=' px-2 py-1 ml-3 rounded-2xl font-semibold text-sm bg-emerald-100 border border-emerald-300 text-emerald-800'>
                Pagado
              </span>
            </div>
            {/* Reference User */}
            <div className=' col-span-1 grid grid-rows-2'>
              <div className=' text-base font-semibold text-gray-900'>
                Pago Comisión
              </div>
              <div className=' text-sm font-medium text-gray-700'>
                John Doe
              </div>
            </div>
            {/* Identification */}
            <div className=' col-span-1 text-end'>
              <div className=' text-base font-semibold cursor-pointer text-indigo-600'>
                  Visualizar Transacción
                </div>
                <div className=' text-sm font-medium text-gray-700'>
                  Transaccion #<span className=' font-semibold text-gray-900'>9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d</span>
                </div>
            </div>
        </div>
        <div className=' grid grid-cols-3 pt-3 px-5  border-b pb-2'>
            {/* Value */}
            <div className=' col-span-1 flex items-center'>
              <div>
                <ArrowUpCircleIcon className='size-8 text-emerald-500 mr-2'/>
              </div>
              <div className=' values text-gray-700'>
                $ 10000 COP
              </div>
              <span className=' px-2 py-1 ml-3 rounded-2xl font-semibold text-sm bg-emerald-100 border border-emerald-300 text-emerald-800'>
                Pagado
              </span>
            </div>
            {/* Reference User */}
            <div className=' col-span-1 grid grid-rows-2'>
              <div className=' text-base font-semibold text-gray-900'>
                Pago Comisión
              </div>
              <div className=' text-sm font-medium text-gray-700'>
                John Doe
              </div>
            </div>
            {/* Identification */}
            <div className=' col-span-1 text-end'>
              <div className=' text-base font-semibold cursor-pointer text-indigo-600'>
                  Visualizar Transacción
                </div>
                <div className=' text-sm font-medium text-gray-700'>
                  Transaccion #<span className=' font-semibold text-gray-900'>9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d</span>
                </div>
            </div>
        </div>

        <div className=' grid grid-cols-3 pt-3 px-5  border-b pb-2'>
            {/* Value */}
            <div className=' col-span-1 flex items-center'>
              <div>
                <ArrowUpCircleIcon className='size-8 text-emerald-500 mr-2'/>
              </div>
              <div className=' values text-gray-700'>
                $ 10000 COP
              </div>
              <span className=' px-2 py-1 ml-3 rounded-2xl font-semibold text-sm bg-emerald-100 border border-emerald-300 text-emerald-800'>
                Pagado
              </span>
            </div>
            {/* Reference User */}
            <div className=' col-span-1 grid grid-rows-2'>
              <div className=' text-base font-semibold text-gray-900'>
                Pago Comisión
              </div>
              <div className=' text-sm font-medium text-gray-700'>
                John Doe
              </div>
            </div>
            {/* Identification */}
            <div className=' col-span-1 text-end'>
              <div className=' text-base font-semibold text-indigo-600'>
                  Visualizar Transacción
                </div>
                <div className=' text-sm font-medium text-gray-700'>
                  Transaccion #<span className=' font-semibold text-gray-900'>9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d</span>
                </div>
            </div>
        </div>


    </div>
  )
}

export default Registers