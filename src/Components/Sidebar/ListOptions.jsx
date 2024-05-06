import React, { useState } from "react";
import Option from "./Option";
import { ChartBarIcon, UsersIcon, NewspaperIcon, CreditCardIcon, PresentationChartBarIcon } from "@heroicons/react/24/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faHouseFlag } from '@fortawesome/free-solid-svg-icons'

function ListOptions() {
  const options = [
    {
      name: "Dashboard",
      icon: <ChartBarIcon  className=" size-10"/>,
      path: 'dashboard'
    },
    {
      name: "Gestionar Usuarios",
      icon: <UsersIcon className=" size-10" />,
      path: 'users'
    },
    {
      name: "Gestionar Propiedades",
      icon: <FontAwesomeIcon className=" size-10" icon={faHouseFlag}/>,
      path: 'properties'
    },
    {
      name: "Gestionar Reservas",
      icon: <NewspaperIcon className=" size-10" />,
      path: 'reservations'
    },
    {
      name: "Gestionar Transacciones",
      icon: <CreditCardIcon className=" size-10" />,
      path: 'transactions'
    },
    {
      name: "Generar Reportes",
      icon: <PresentationChartBarIcon className=" size-10" />,
      path: 'report'
    },
  ];
  return (
    <>
      <hr className=" inline-flex rounded-2xl text-cneter  border-rose-200 border-2 w-3/4" />
      <div className="my-5">
        {options.map((option, idx) => {
          return <Option key={idx} option={option} />;
        })}
      </div>
      <hr className=" inline-flex rounded-2xl text-cneter  border-rose-200 border-2 w-3/4" />
    </>
  );
}

export default ListOptions;
