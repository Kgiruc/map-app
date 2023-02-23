import { useEffect, useState } from "react";



const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?"
//https://nominatim.openstreetmap.org/search?q=135+pilkington+avenue,+birmingham&format=json&addressdetails=1


function SearchMenu() {
  const [searchText, setSearchText] = useState("polska")
  const [start, setStart] = useState([{}])

  function czesc() {
  useEffect(() => {
    fetch(`${NOMINATIM_BASE_URL}q=${searchText}&format=json&addressdetails=1`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setStart(data)
      })
      .catch(err => console.log(err))
  }, [])
}

  return (
    <div className="">
      <form>
        <label>
          Search:
          <input
            className="border-4"
            type="text"
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
          />
        </label>
      </form>
      <button className="border-2"
      onClick={czesc}
      >Go</button>
    <p>{start[0].lat}</p>
    <p>{start[0].lon}</p>
    <p>{searchText}</p>
    </div>
  )
}

export default SearchMenu;
