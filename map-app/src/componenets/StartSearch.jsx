import { useEffect, useState } from "react";


const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?"

function SearchMenu({ setStartdate }) {
  const [searchText, setSearchText] = useState("")
  const [start, setStart] = useState([{}])


  useEffect(() => {
    fetch(`${NOMINATIM_BASE_URL}q=${searchText}&format=json&addressdetails=1`)
      .then(res => res.json())
      .then(data => {
        setStart(data)
      })
      .catch(err => console.log(err.message))
  }, [searchText])




  return (
    <div className="flex flex-col w-100%">
      <label className=" flex flex-col text-lg">
        Addres początkowy:
        <input
          className="border-4 rounded-xl hover:bg-yellow-100 p-2 w-[60vw] text-black"
          type="text"
          value={searchText}
          onChange={e => { setSearchText(e.target.value) }}
        />
      </label>
      {start.length > 0 ?
        (<div>
          <p className="bg-white text-black rounded-md p-1 mt-0 max-w-[60vw]">
            {start[0].display_name}
          </p>
          
          <button
            className="mt-2 border-2 border-green-500 rounded-md p-1 pl-2 pr-2
            hover:bg-white hover:text-black"
            onClick={() => { setStartdate({ start }) }}>
            potwierdzam</button>
        </div>
        )
        :
        (<p className="text-xs">podaj i potwierdź dobry adres początkowy</p>)}

    </div>
  )
}

export default SearchMenu;
