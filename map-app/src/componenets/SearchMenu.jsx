import { useEffect, useState } from "react";



const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?"
//https://nominatim.openstreetmap.org/search?q=135+pilkington+avenue,+birmingham&format=json&addressdetails=1


function SearchMenu() {
  const [searchText, setSearchText] = useState("polska")
  const [start, setStart] = useState([{}])


  useEffect(() => {
    fetch(`${NOMINATIM_BASE_URL}q=${searchText}&format=json&addressdetails=1`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setStart(data)
      })
      .catch(err => console.log(err))
  }, [searchText])


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
      <button className="border-2">Go</button>
      {start.length > 0 ? (<><p>{start[0].lat}</p>
      <p>{start[0].lon}</p>
      <p>{searchText}</p></>
      ) : (<p>podaj adres</p>)}
    </div>
  )
}

export default SearchMenu;
