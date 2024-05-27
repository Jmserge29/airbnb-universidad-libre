import { faHouseFlag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  CalendarDaysIcon,
  CreditCardIcon,
  NewspaperIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";
import { WrenchScrewdriverIcon } from "@heroicons/react/24/solid";

function InformationBasic({ user }) {
  return (
    <div className="lg:col-start-3 lg:row-end-1">
      <div className="rounded-lg bg-slate-50 shadow-sm ring-1 ring-gray-900/5 ">
        <dl className="flex flex-wrap">
          <div className="flex-auto pl-6 pt-6">
            <dt className="text-sm font-semibold leading-6 text-gray-900">
              Monto acumulado
            </dt>
            <dd className="mt-1 text-xl  leading-6 text-gray-900 values">
              $ XXXXXXXX
            </dd>
          </div>
          <div className="flex-none self-end px-6 pt-4">
            <dt className="sr-only">Status</dt>
            <dd className="rounded-md bg-green-200 px-2 py-1 text-xs font-bold text-green-700 ring-1 ring-inset ring-green-600/20">
              XXXXX
            </dd>
          </div>
          <div className="mt-6 flex w-full flex-none gap-x-4 border-t border-gray-900/5 px-6 pt-6">
            <dt className="flex-none">
              <span className="sr-only">Client</span>
              <UserCircleIcon
                className="h-6 w-5 text-gray-400"
                aria-hidden="true"
              />
            </dt>
            <dd className="text-sm font-bold leading-6 text-gray-900">
              {user.nombre}
            </dd>
          </div>
          <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
            <dt className="flex-none">
              <span className="sr-only">Due date</span>
              <CalendarDaysIcon
                className="h-6 w-5 text-gray-400"
                aria-hidden="true"
              />
            </dt>
            <dd className="text-sm leading-6 text-gray-800">
              <time dateTime={user.createdAt}>{user.createdAt}</time>
            </dd>
          </div>
          <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
            <dt className="flex-none">
              <span className="sr-only">Due date</span>
              <WrenchScrewdriverIcon
                className="h-6 w-5 text-gray-400"
                aria-hidden="true"
              />
            </dt>
            <dd className="text-sm leading-6 text-gray-800">
              <time dateTime={user.createdAt}>{user.rol_id}</time>
            </dd>
          </div>
          <div className="mt-4 flex w-full flex-none gap-x-4 px-6 pb-6">
            <dt className="flex-none">
              <span className="sr-only">Status</span>
              <CreditCardIcon
                className="h-6 w-5 text-gray-400"
                aria-hidden="true"
              />
            </dt>
            <dd className="text-sm leading-6 text-gray-800">
              {user.numero_tarjeta == ""
                ? "Aun no se ha ingresado método de pago"
                : ` ${user.numero_tarjeta} MasterCard`}{" "}
            </dd>
          </div>
        </dl>
      </div>
      <div className="grid rounded-xl mt-5 te h-40 bg-rose-50 shadow-md w-full grid-cols-3 text-center ">
        <div className="col-span-1 grid grid-rows-2 items-center">
            <div><FontAwesomeIcon className="text-rose-500 size-10" icon={faHouseFlag}/></div>
            <div className=" values text-4xl text-rose-500">1</div>
        </div>
        <div className="col-span-1 grid grid-rows-2 items-center content-center">
            <div className="flex justify-center"><NewspaperIcon className=" text-rose-500 size-10" /></div>
            <div className=" values text-4xl text-rose-500">1</div>
        </div>
        <div className="col-span-1 grid grid-rows-2 items-center">
            <div className="flex justify-center"><CreditCardIcon className=" text-rose-500 size-10" /></div>
            <div className=" values text-4xl text-rose-500">0</div>
        </div>
      </div>
    </div>
  );
}

export default InformationBasic;
