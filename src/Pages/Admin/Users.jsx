import { getAllUsers } from '../../Api/api';
import Table from '../../Components/Tables/Table'
import { useEffect, useState } from 'react'

function Users() {
  const [dataUsers, setdataUsers] = useState([])

  async function loadDataUser() {
    try {
      setdataUsers(await getAllUsers());
      
    } catch (error) {
      console.log("No se pudo cargar la información de los usuarios")
    }
  }

  useEffect(() => {
    loadDataUser();
  },  [])


  const headerUsers = [
    { title: "Usuario" },
    { title: "Identificación" },
    { title: "Email" },
    { title: "id / rol" },
    { title: "Estado" },
    { title: "Funciones" },
  ];

  return (
    <div>
      <Table header={headerUsers} data={dataUsers} />
    </div>
  )
}

export default Users