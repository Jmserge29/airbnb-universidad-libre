import Table from '../../Components/Tables/Table'

function Users() {
  

  const headerUsers = [
    { title: "Usuario" },
    { title: "Identificación" },
    { title: "Email" },
    { title: "id / rol" },
    { title: "Estado" },
    { title: "Funciones" },
  ];

  const dataUsers = [
      { 
        id: "507f1f77bcf86cd799439432",
        nombre: "Jhon Doe",
        email: "JhonDoe@gmail.com",
        cedula: "104225187",
        password: "12sdff23_fwefwe5",
        imagen: "https://i0.wp.com/puppis.blog/wp-content/uploads/2022/02/abc-cuidado-de-los-gatos-min.jpg?resize=521%2C346&ssl=1",
        estado: 1,
        roleId: "507f1f77bcf86cd799439432",
     },
     { 
      id: "507f1f77bcf86cd799gter4",
      nombre: "Camila Monroy",
      cedula: "10428879",
      email: "CamiMonroy@gmail.com",
      password: "12sdff23_fwefwe5",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5tY2WIbV3JPTCJVthWX7GaU8UG-JScCPv5b4IpTW1pTlN8LhJNmnpVmepIIyDzjLC_uY&usqp=CAU",
      estado: 1,
      roleId: "507f1f77bcf86cd799439432",
   },

   { 
    id: "507f1f77bcf86cd799gt54",
    nombre: "Franco Rodriguez",
    cedula: "22541878",
    email: "FranciscoRodriguez@gmail.com",
    password: "12sdff23_fwefwe5",
    imagen: "https://i.pinimg.com/236x/68/07/aa/6807aadf04c8e373aeee366f5b842cb7.jpg",
    estado: 0,
    roleId: "507f1f77bcf86cd799439432",
 },

 { 
  id: "507f1f77bcf86cd7993454",
  nombre: "Jhon Doe",
  cedula: "1042251697",
  email: "JhonDoe@gmail.com",
  password: "12sdff23_fwefwe5",
  imagen: "https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D",
  estado: 1,
  roleId: "507f1f77bcf86cd799439432",
},

{ 
  id: "507f1f77bcf86cd7gdfsg",
  nombre: "Jhon Doe",
  cedula: "78554822",
  email: "JhonDoe@gmail.com",
  password: "12sdff23_fwefwe5",
  imagen: "https://bestfriends.org/sites/default/files/styles/image_mobile_square/public/image/WaffleLove1384sak_1.jpg?h=ebb7fe6c&itok=LPFwsJ-A",
  estado: 0,
  roleId: "507f1f77bcf86cd799439432",
},

{ 
  id: "507f1f77bcf86cd79576665",
  nombre: "Jhon Doe",
  cedula: "10932173",
  email: "JhonDoe@gmail.com",
  password: "12sdff23_fwefwe5",
  imagen: "https://i0.wp.com/puppis.blog/wp-content/uploads/2022/02/abc-cuidado-de-los-gatos-min.jpg?resize=521%2C346&ssl=1",
  estado: 0,
  roleId: "507f1f77bcf86cd799439432",
},

  ];

  return (
    <div>
      <Table header={headerUsers} data={dataUsers} />
    </div>
  )
}

export default Users