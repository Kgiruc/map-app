import { useEffect, useState } from "react";


const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?"

function SearchMenu({ setMetadate }) {
  const [searchText, setSearchText] = useState("")
  const [meta, setMeta] = useState([{}])

  useEffect(() => {
    fetch(`${NOMINATIM_BASE_URL}q=${searchText}&format=json&addressdetails=1`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setMeta(data)
      })
      .catch(err => console.log(err.message))
  }, [searchText])




  return (
    <div className="">
      <label>
        meta:
        <input
          className="border-4"
          type="text"
          value={searchText}
          onChange={e => { setSearchText(e.target.value) }}
        />
      </label>
      {meta.length > 0 ?
        (<button onClick={() =>  setMetadate({meta}) }>dalej</button>) :
        (<p>podaj adres końcowy</p>)}
    </div>
  )
}

export default SearchMenu;