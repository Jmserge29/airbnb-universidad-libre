import { Link, useLocation } from "react-router-dom";


function Option({option}) {
  let location = useLocation();
  let pathname = location.pathname;
  let routeParts = pathname.split('/');
  let lastRoutePart = routeParts[routeParts.length - 1];
  console.log("Estas en la ruta ",lastRoutePart)
  return (
  <>
    <Link to={`../admin/${option.path}`}>
    <div onClick={() => {}} className={` cursor-pointer group flex my-3  hover:rounded-3xl px-4 py-4 hover:shadow-md text-base transition-all ease-in-out font-semibold ${lastRoutePart==option.path ? "bg-rose-500 rounded-3xl" : "rounded-xl"} hover:bg-rose-500 hover:text-white mx-3`}>
        <span className={`mr-3 text-gray-900 ${lastRoutePart==option.path ? "text-white" : ""} group-hover:text-white`}>{option.icon}</span>
    </div>
      
    </Link>
  </>
  );
}

export default Option;
