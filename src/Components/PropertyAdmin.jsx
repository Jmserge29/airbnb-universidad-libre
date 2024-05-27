import { BoltIcon } from '@heroicons/react/24/solid'
import { UserGroupIcon } from '@heroicons/react/24/solid'
import { UserCircleIcon } from '@heroicons/react/24/solid'
import React from 'react'

function PropertyAdmin({data}) {
  return (
            <div class="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
          <h3 class="mb-3 text-sm font-semibold text-rose-500">
            {data.ubicacion}
          </h3>
          <div class="relative">
            {data.picture ? <img
              class="w-full rounded-xl"
              src={data.picture == "" ? "https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" : data.picture}
              alt="Colors"
            /> : 

            <div role="status" class="flex items-center justify-center h-56 max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
                <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z"/>
              </svg>
                <span class="sr-only">Loading...</span>
            </div>
            }
            
            <p class="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
              {data.categoria}
            </p>
          </div>
          <h1 class="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">
            {data.nombre}
          </h1>
          <div class="my-4">
            <div class="flex space-x-1 my-2 items-center content-center">
              <span className=' items-center content-center flex'>
                <BoltIcon className='size-6 text-rose-500'/>
              </span>
              <p>{data.categoria}</p>
            </div>
            <div class="flex space-x-1 my-2 items-center">
              <span>
                <UserGroupIcon className='size-6 text-rose-500'/>
              </span>
              <p>{data.capacidad} Personas</p>
            </div>
            <div class="flex space-x-1 items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-rose-500 mb-1.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </span>
              <p>{data.comodidades}</p>
            </div>
            <div class="flex space-x-1 my-2 items-center">
              <span>
                <UserCircleIcon className=' size-6 text-rose-500'/>
              </span>
              <p>{data.usuario_nombre}</p>
            </div>

            <button class="mt-4 text-xl w-full text-white values bg-rose-500 py-2 rounded-xl shadow-lg">
              $ {data.valor}
            </button>
          </div>
        </div>

  )
}

export default PropertyAdmin