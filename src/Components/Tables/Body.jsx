import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";

function Body({data}) {
    return (
      <tbody className="">
        {data.map((row) => {
          return(
            <tr className=" hover:bg-rose-100 cursor-cell">
            <td className="px-6 py-4 font-semibold text-gray-950">
              <div className=" inline-flex items-center">
                <img
                  className=" bg-cover bg-center size-10 rounded-full"
                  src={row.imagen}
                  alt=""
                />
                <p className="ml-3 ">{row.nombre}</p>
              </div>
            </td>
            <td className="px-6 py-4 values text-gray-800">
              <div className=" inline-flex items-center">
                <p>{row.cedula}</p>
              </div>
            </td>
            <td className="px-6 py-4 font-semibold text-gray-950">
              <p>{row.email}</p>
            </td>
  
            <td className="px-6 py-4 text-sm text-gray-800">
              <div className=" inline-flex items-center">
                <p className=" values">{row.id}</p>
                <span className="ml-2 px-2 py-1 bg-gray-200 border-gray-700 text-gray-500 rounded-lg font-semibold">
                  admin
                </span>
              </div>
            </td>
            <td className={`px-6 py-4 whitespace-nowrap text-base  ${ row.estado == 1 ? "text-emerald-500" : "text-rose-500" }`}>
              <div className=" inline-flex items-center">
                <span className={`${row.estado == 1 ? "shadow-emerald-200 bg-emerald-500 " : "shadow-rose-200 bg-rose-500 " }} animate-pulse inline-flex ease-in-out transition-all shadow-2xl  opacity-75 rounded-full size-3`}></span>
                <p className=" ml-2 font-bold text-center">{ row.estado == 1 ? "Activo" : "Inactivo" }</p>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium flex justify-center">
              <AdjustmentsHorizontalIcon className=" size-10 text-gray-950 cursor-pointer mr-3" />
            </td>
          </tr>  
          )
        })}
      </tbody>
    );
  }

export default Body