import React from 'react'
import ItemLogo from '../Components/ItemLogo'
import { FaceFrownIcon } from '@heroicons/react/24/solid'

function NotFound() {
  return (
    <div className="max-w-[50rem] flex flex-col mx-auto size-full">
  <header className="mb-auto flex justify-center z-50 w-full py-4 mt-12">
    <nav className="px-4 sm:px-6 lg:px-8" aria-label="Global">
      <a className="flex-none font-semibold " href="./" aria-label="Brand">
        <ItemLogo/>
      </a>
    </nav>
  </header>
  <main id="content">
    <div className="text-center py-10 px-4 sm:px-6 lg:px-8 items-center">
        <div className='items-center content-center inline-flex'>
            <h1 className=" text-7xl font-bold text-gray-950 sm:text-[196px] inline-flex">404 </h1>
            <FaceFrownIcon className=' text-rose-600 size-56'/>
        </div>
        <h3 className=' sm:text-5xl text-gray-800 font-semibold my-8'>{'< '}Not Found{' />'}</h3>
      <p className="mt-3 text-gray-600">Oops, ha ocurrido un error.</p>
      <p className="text-gray-600">Lo siento, no hemos encontrado está pagina.</p>
      <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
        <a className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="./">
          <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          Volver a la página Principal
        </a>
      </div>
    </div>
  </main>

</div>
  )
}

export default NotFound