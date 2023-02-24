import { useEffect, useState } from "react";


const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?"

function SearchMenu({ setStartdate }) {
  const [searchText, setSearchText] = useState("")
  const [start, setStart] = useState([{}])

  useEffect(() => {
    fetch(`${NOMINATIM_BASE_URL}q=${searchText}&format=json&addressdetails=1`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setStart(data)
      })
      .catch(err => console.log(err.message))
  }, [searchText])




  return (
    <div className="">
      <label>
        Start:
        <input
          className="border-4"
          type="text"
          value={searchText}
          onChange={e => { setSearchText(e.target.value) }}
        />
      </label>
      {start.length > 0 ?
        (<button onClick={() =>  setStartdate({start}) }>dalej</button>) :
        (<p>podaj adres</p>)}
    </div>
  )
}

export default SearchMenu;
