import React from 'react'

function ItemSearch({header}) {
  return (
    <>
    <div className={`${header ? "mt-5": ""} content-center flex justify-center w-full pb-6`}>
          <input
            type="text"
            className=" sm:w-1/3 w-[75%] py-3 px-5 block border-[1px] text-gray-800 font-medium border-gray-200 rounded-s-full shadow-xl text-sm focus:border-rose-500 focus:ring-rose-500 disabled:opacity-50 disabled:pointer-events-none "
            placeholder="Casa De Campo..."
          />
          <button
            type="button"
            className="w-[2.875rem] h-[2.875rem] flex-shrink-0 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-full border border-transparent bg-rose-500 text-white hover:bg-rose-500 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            <svg
              className="flex-shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </button>
        </div>
    </>
  )
}

export default ItemSearch