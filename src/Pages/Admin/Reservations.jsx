import React, { useEffect, useState } from 'react'
import ReservationCard from '../../Components/Reservations/ReservationCard'
import { getReservations } from '../../Api/api';

function Reservations() {

  const [reservations, setReservations] = useState([])
  async function loadDataReservations() {
    try {
      setReservations(await getReservations());
    } catch (error) {
      console.log("No se pudo cargar la información de los usuarios")
    }
  }

  useEffect(() => {
    loadDataReservations();
  },  [])

  return (
    <div>
      Reservations
      <div className=' grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  '>
        <ReservationCard/>
        <ReservationCard/>
        <ReservationCard/>
        <ReservationCard/>
        <ReservationCard/>
        <ReservationCard/>
        <ReservationCard/>
      </div>
    </div>
  )
}

export default Reservations