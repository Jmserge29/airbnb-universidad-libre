import React from "react";

function HeaderDetail({ user }) {
  return (
    <>
      <div className="mx-auto max-w-screen-md bg-white drop-shadow-xl rounded-2xl mb-5 px-4 py-5 sm:px-6 lg:px-8 mt-5 ">
        <div className="mx-auto flex max-w-2xl items-center justify-between gap-x-8 lg:mx-0 lg:max-w-none">
          <div className="flex items-center gap-x-6">
            <img
              src={
                user.picture == ""
                  ? "https://i.pinimg.com/originals/c7/79/85/c77985d336755f6fa6e823717f71cc10.png"
                  : user.picture
              }
              alt={user.nombre}
              className="h-16 w-16 flex-none rounded-full ring-1 ring-gray-900/10"
            />
            <h1>
              <div className="text-base leading-6 text-gray-600">
                Identificación{" "}
                <span className="text-gray-700 values"># {user.cedula}</span>
              </div>
              <div className="mt-1 text-base font-semibold leading-6 text-gray-900">
                AirBnB, Universidad Libre BQ
              </div>
            </h1>
          </div>
          <div className="flex items-center gap-x-4 sm:gap-x-6">
            <a
              href="#"
              className=" rounded-md  px-4 py-2 hover:bg-red-400 text-sm bg-rose-500 font-semibold leading-6 text-white sm:block"
            >
              Darse de baja
            </a>
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Editar Información
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderDetail;
