import React from 'react'
import ReservationCard from '../../Components/Reservations/ReservationCard'

function Reservations() {
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