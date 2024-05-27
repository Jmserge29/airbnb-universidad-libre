import { useEffect, useState } from "react";
import Header from "./Components/Header"
import Property from "./Components/Property"
import { Link } from "react-router-dom";
import axios from "axios";
import config from "../config";

function App() {
  const [header, setheader] = useState(false);
  const [props, setProps] = useState([])
  const [category, setCategory] = useState([])


  const scrollHeader = () => {
    if (window.scrollY > 93) {
      setheader(true);
    } else {
      setheader(false);
    }
  };

  const handleClick = (categoryName) => {
    localStorage.setItem('selectedCategory', categoryName);
    setCategory(categoryName)
};


  async function getPropertiesCtageory () {
    try {
      if(localStorage.getItem('selectedCategory') == "*"){
        await axios.get(`${config.BACKEND_API_URL}/property/properties`).then((res) => {
          setProps(res.data)
        }).catch((err) => {
            console.log("A Error has been in the request ",err)
        })
      } else {
        await axios.get(`${config.BACKEND_API_URL}/property/properties-category/${category}`).then((res) => {
          setProps(res.data)
        }).catch((err) => {
            console.log("A Error has been in the request ",err)
        })
      }
    } catch (error) {
        console.log(error)
    }
}

  async function loadDataProperties() {
    try {
      await getPropertiesCtageory();
    } catch (error) {
      console.log("No se pudo cargar la información de los usuarios")
    }
  }
  
  useEffect(() => {

    if (!localStorage.getItem('selectedCategory')) {
      localStorage.setItem('selectedCategory', '*');
  }

    window.addEventListener("scroll", scrollHeader);
    loadDataProperties();

    return () => {
      window.addEventListener("scroll", scrollHeader);
    };

  }, [category]);

  
  return (
    <>
    <Header header={header} handleClick={handleClick} />
    <Link to={'/admin/users'}><div className=" bottom-8 px-3 py-2 font-bold rounded-3xl saturate-200 backdrop-blur-xl shadow-2xl right-10 fixed bg-rose-400 text-white">Admin</div></Link>
    <Link to={'/Client/me'}><div className=" fixed bottom-8 left-10 px-3 py-2 font-bold rounded-3xl saturate-200 backdrop-blur-xl shadow-2xl bg-rose-400 text-white">Propietario</div></Link>

    <div className={`${header ? "mt-[273px]": ""} container mx-auto`}>
      <div className={`grid grid-cols-1 ${props ? " xl:grid-cols-5  md:grid-cols-3 sm:grid-cols-2 ": ""}  gap-x-4 gap-y-8 mt-8`}>
        {(props || props.length != []) ? props.map((property) => {
          return(
              <Property data={property} key={property._id} />
          )
        }) : <div className=" text-center font-bold text-lg w-full">Aún no hay Propiedades para mostrar, estamos trabajando en ello...</div>}
        {/* {listProperties.map((property) => {
          return(
            <div key={property._id}>
              <Property data={property} />
            </div>
          )
        })} */}
      </div>
    </div>
    </>
  )
}

export default App
