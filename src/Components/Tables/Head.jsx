
function Head({header}) {

    return (
        <thead className="bg-rose-500">
        <tr>
          {header.map((head, idx) => {
            return(
              <th key={idx} scope="col" className="px-6 py-3 text-start text-xs text-white  font-semibold uppercase ">{head.title}</th>
            )
          })}
        </tr>
      </thead>
    )
  }

export default Head