import React from 'react'
import Head from './Head'
import Body from './Body'

function Table({header, data}) {
  return (
    <div className="flex flex-col ">
    <div className=" ">
      <div className="p-1.5 min-w-full inline-block align-middle">
        <div className=" rounded-2xl overflow-hidden shadow-2xl">
          <table className="min-w-full bg-white shadow-2xl ">
            <Head header={header}/>
            <Body data={data} />
          </table>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Table