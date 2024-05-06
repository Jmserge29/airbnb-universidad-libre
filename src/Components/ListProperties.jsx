import React from "react";

function ListProperties() {

    const listproperties = [
        {name: "", image: "", availability: true, description: "", price: 90000, category: "", stats: 4.5, ubication: ""},
    ]
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-8">
        <Property />
      </div>
    </>
  );
}

export default ListProperties;
