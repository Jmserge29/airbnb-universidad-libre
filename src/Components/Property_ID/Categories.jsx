
function Categories() {
  return (
    <>
      <div>
        <h4 className=" pb-3 text-lg font-semibold text-gray-800">
          Categorías:
        </h4>
        <div className=" flex space-x-3">
          <span className=" px-4 py-2 font-semibold text-white bg-gradient-to-tr rounded-2xl from-rose-600 to-rose-400 ">
            Deportiva
          </span>
          <span className=" px-4 py-2 font-semibold text-white bg-gradient-to-tr rounded-2xl from-rose-600 to-rose-400 ">
            Cabaña
          </span>
          <span className=" px-4 py-2 font-semibold text-white bg-gradient-to-tr rounded-2xl from-rose-600 to-rose-400 ">
            Aire Libre
          </span>
        </div>
      </div>
    </>
  );
}

export default Categories;
