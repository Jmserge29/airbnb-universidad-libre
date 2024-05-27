import { NewspaperIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
function Property({ data }) {
  const navigate = useNavigate();
  return (
      <div
        onClick={() => navigate(`/property/${data.id}`)}
        className="group size-72 cursor-pointer group: bg-cover bg-center rounded-[32px] p-1 relative shadow-[0_70px_30px_-50px_rgba(96,75,74,0.188)] transition-all duration-500 ease-in-out hover:rounded-tl-[55px]"
        style={{ backgroundImage: `url(${data.picture})` }}
      >
        <button className="mail absolute right-8 top-5 bg-transparent border-none">
          <NewspaperIcon className="size-7 hover:text-rose-500 text-white font-bold" />
        </button>
        <div className="bottom absolute bottom-[3px] left-[3px] right-[3px] bg-white top-[80%] rounded-[29px] z-20 shadow-[rgba(96,75,74,0.188)_0_5px_5px_0px_inset] overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.645,0.045,0.355,1)] delay-200 group-hover:top-[17%] group-hover:rounded-t-[80px_29px_29px_29px]">
          <div className="absolute bottom-12 left-6 right-6 h-[190px]">
            <span className="about-me block text-sm mt-3 text-gray-800">
              {data.comodidades}
            </span>
            <div className=" inline-flex mt-2 text-sm">
              <MapPinIcon className="size-6 text-rose-400 "/><span className="text-gray-800 font-bold">{data.ubicacion}</span>
            </div>
          </div>
          <div className="bottom-bottom absolute bottom-4 left-6 right-6 flex items-center justify-between">
            <div className="flex values text-xs text-black">
              {data.nombre}
            </div>
            <div className="  text-sm text-rose-500 values">$ {data.valor}</div>
          </div>
        </div>
      </div>
  );
}

export default Property;
