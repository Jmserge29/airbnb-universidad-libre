import { useEffect, useState } from "react";
import Header from "./Components/Header"
import Property from "./Components/Property"
import listProperties from '../Schema/ListProperties.json'
import Sidebar from "./Components/Sidebar/Sidebar";
function App() {
  const [header, setheader] = useState(false);

  const scrollHeader = () => {
    if (window.scrollY > 93) {
      setheader(true);
    } else {
      setheader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);

    return () => {
      window.addEventListener("scroll", scrollHeader);
    };
  }, []);
  
  return (
    <>
    <Header header={header}/>
    <div className={`${header ? "mt-[273px]": ""} container mx-auto`}>
      <div className='grid grid-cols-1 xl:grid-cols-5  md:grid-cols-3 sm:grid-cols-2  gap-x-4 gap-y-8 mt-8'>
        {listProperties.map((property) => {
          return(
            <div key={property._id}>
              <Property data={property} />
            </div>
          )
        })}
      </div>
    </div>
    <div className=" ">
      Hellow
    </div>
    </>
  )
}

export default App
