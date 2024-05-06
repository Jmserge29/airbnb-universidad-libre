import Sidebar from "../Components/Sidebar/Sidebar";

function Admin({children}) {

  return (
    <>
      <Sidebar />
      <div className="sm:ml-[180px] sm:mr-[100px] my-2">
        <div className=" container mx-auto pt-12">
          {/* <TableUsers/> */}
          {children}
        </div>
      </div>
    </>
  );
}

export default Admin;
