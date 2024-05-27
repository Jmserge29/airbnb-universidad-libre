import HeaderDetail from '../../Components/Profile/HeaderDetail'
import IconProfile from '../../Components/Profile/IconProfile'
import InformationBasic from '../../Components/Profile/InformationBasic'
import IconGeneral from '../../Components/IconGeneral'
import Cookies from 'universal-cookie'
import config from '../../../config'
import { useEffect, useState } from 'react'

function Me() {

  const [reserva, setReserva] = useState(() => {
    // Intentamos obtener la reserva del localStorage
    const reservaGuardada = localStorage.getItem('reserva');
    // Si existe, la parseamos a JSON y la devolvemos, de lo contrario devolvemos un array vacío
    return reservaGuardada ? JSON.parse(reservaGuardada) : [];
  });
  console.log("Reserva", reserva)


    // Función para eliminar la reserva
    const eliminarReserva = () => {
      // Eliminamos la reserva del estado
      setReserva([]);
      // Eliminamos la reserva del localStorage
      localStorage.removeItem('reserva');
    };

    
  const cookies = new Cookies()
  const user = cookies.get(`${config.SECRET_COOKIE}`);
  console.log(user)

  useEffect(() => {
  },  [reserva])


  return (
    <>
      <IconGeneral/>
      <IconProfile user={user}/>
      <HeaderDetail user={user}/>

      <div className='mx-auto  max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8 bg-white rounded-xl'>
        <div className="mx-auto grid max-w-2xl grid-cols-1 grid-rows-1 items-start gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {/* Invoice summary */}
            <InformationBasic user={user}/>

            {/* Invoice */}
            <div className="-mx-4 px-4 py-8 shadow-sm ring-1 ring-gray-900/5 sm:mx-0 sm:rounded-lg sm:px-8 sm:pb-14 lg:col-span-2 lg:row-span-2 lg:row-end-2 xl:px-16 xl:pb-20 xl:pt-16">
              <h2 className="text-base font-semibold leading-6 text-gray-900">Invoice</h2>
              <dl className="mt-6 grid grid-cols-1 text-sm leading-6 sm:grid-cols-2">
                <div className="sm:pr-4">
                  <dt className="inline text-gray-500">Issued on</dt>{' '}
                  <dd className="inline text-gray-700">
                    <time dateTime="2023-23-01">January 23, 2023</time>
                  </dd>
                </div>
                <div className="mt-2 sm:mt-0 sm:pl-4">
                  <dt className="inline text-gray-500">Due on</dt>{' '}
                  <dd className="inline text-gray-700">
                    <time dateTime="2023-31-01">January 31, 2023</time>
                  </dd>
                </div>
                <div className="mt-6 border-t border-gray-900/5 pt-6 sm:pr-4">
                  <dt className="font-semibold text-gray-900">From</dt>
                  <dd className="mt-2 text-gray-500">
                    <span className="font-medium text-gray-900">Acme, Inc.</span>
                    <br />
                    7363 Cynthia Pass
                    <br />
                    Toronto, ON N3Y 4H8
                  </dd>
                </div>
                <div className="mt-8 sm:mt-6 sm:border-t sm:border-gray-900/5 sm:pl-4 sm:pt-6">
                  <dt className="font-semibold text-gray-900">To</dt>
                  <dd className="mt-2 text-gray-500">
                    <span className="font-medium text-gray-900">Tuple, Inc</span>
                    <br />
                    886 Walter Street
                    <br />
                    New York, NY 12345
                  </dd>
                </div>
              </dl>
              {reserva.length != 0 ? <div className='bg-rose-50 rounded-xl px-12 pb-5'>
                <table className="mt-16 w-full  whitespace-nowrap text-left text-sm leading-6">
                  <colgroup>
                    <col className="w-full" />
                    <col />
                    <col />
                    <col />
                  </colgroup>
                  <thead className="border-b border-gray-200 text-gray-900">
                    <tr>
                      <th scope="col" className="px-0 py-3 font-semibold">
                        Propiedad
                      </th>
                      <th scope="col" className="hidden py-3 pl-8 pr-0 text-right font-semibold sm:table-cell">
                        Categoría
                      </th>
                      <th scope="col" className="hidden py-3 pl-8 pr-0 text-right font-semibold sm:table-cell">
                        Capacidad
                      </th>
                      <th scope="col" className="py-3 pl-8 pr-0 text-right font-semibold">
                        Valor
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {reserva.map((item) => (
                      <tr key={item.id} className="border-b border-gray-100">
                        <td className="max-w-0 px-0 py-5 align-top">
                          <div className="truncate  text-gray-950 font-semibold">{item.nombre}</div>
                          <div className="truncate text-gray-800">{item.comodidades}</div>
                        </td>
                        <td className="hidden py-5 pl-8 pr-0 text-right align-top tabular-nums text-gray-700 sm:table-cell">
                          {item.categoria}
                        </td>
                        <td className="hidden py-5 pl-8 pr-0 text-right align-top tabular-nums text-gray-700 sm:table-cell">
                          {item.capacidad}
                        </td>
                        <td className="py-5 pl-8 pr-0 text-right align-top tabular-nums text-gray-700 values">{item.valor}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <th scope="row" className="px-0 pb-0 pt-6 font-normal text-gray-700 sm:hidden">
                        Subtotal
                      </th>
                      <th
                        scope="row"
                        colSpan={3}
                        className="hidden px-0 pb-0 pt-6 text-right font-normal text-gray-700 sm:table-cell"
                      >
                        Subtotal
                      </th>
                      <td className="pb-0 pl-8 pr-0 pt-6 text-right tabular-nums text-gray-900 values">{(reserva.reduce((total, item) => total + parseInt(item.valor), 0)).toFixed(2)}</td>
                    </tr>
                    <tr>
                      <th scope="row" className="pt-4 font-normal text-gray-700 sm:hidden">
                        Comisión
                      </th>
                      <th
                        scope="row"
                        colSpan={3}
                        className="hidden pt-4 text-right font-normal text-gray-700 sm:table-cell"
                      >
                        Comisión
                      </th>
                      <td className="pb-0 pl-8 pr-0 pt-4 text-right tabular-nums text-amber-500 values">{(reserva.reduce((total, item) => total + parseInt(item.valor), 0) * 0.2).toFixed(2)}</td>
                    </tr>
                    <tr>
                      <th scope="row" className="pt-4 font-bold text-gray-900 sm:hidden">
                        Total
                      </th>
                      <th
                        scope="row"
                        colSpan={3}
                        className="hidden pt-4 text-right font-semibold text-gray-900 sm:table-cell"
                      >
                        Total
                      </th>
                      <td className="pb-0 pl-8 pr-0 values pt-4 text-right  text-lg tabular-nums text-rose-700">
                      {((reserva.reduce((total, item) => total + parseInt(item.valor), 0)) + (reserva.reduce((total, item) => total + parseInt(item.valor), 0) * 0.2)).toFixed(2)}
                      </td>
                    </tr>
                    <div className='flex justify-center'>
                      <button onClick={() => eliminarReserva()} className='flex py-2 px-3 bg-rose-500 rounded-xl text-white font-semibold hover:scale-105 hover:bg-rose-300 transition-all'> Finalizar Reserva</button>
                    </div>
                  </tfoot>
                </table>

              </div> : ""}
              
            </div>

        </div>
      </div>

    </>
  )
}

export default Me