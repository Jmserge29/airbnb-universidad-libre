import { faHeart, faPhoneVolume, faHouseMedical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Fuctions({openModal}) {
  return (
    <>
    <div className=" grid grid-cols-3">
                <div className="group col-span-1 text-center justify-center font-semibold">
                  <p className="pb-2">Favoritos</p>
                  <FontAwesomeIcon
                    size="2x"
                    className=" rounded-full p-5 text-slate-500 group-hover:text-rose-400 bg-white transition ease-linear cursor-pointer"
                    icon={faHeart}
                  />
                </div>
                <div className="group col-span-1 text-center justify-center font-semibold">
                  <p className="pb-2">Contactar</p>
                  <FontAwesomeIcon
                    className="rounded-full p-5 text-slate-500 group-hover:text-rose-400 bg-white transition ease-linear cursor-pointer"
                    size="2x" 
                    icon={faPhoneVolume}
                  />
                </div>
                <div className="group col-span-1 text-center justify-center font-semibold">
                  <p className="pb-2">Reservar</p>
                  <FontAwesomeIcon
                  onClick={openModal}
                    size="2x"
                    className=" rounded-full p-5 text-slate-500 group-hover:text-rose-400 bg-white transition ease-linear cursor-pointer"
                    icon={faHouseMedical}
                  />
                </div>
              </div>
    </>
  )
}

export default Fuctions