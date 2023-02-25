
import { useState } from 'react'
import { Link } from 'react-router-dom'
import StartSearch from "./StartSearch";
import MetaSearch from "./MetaSearch";

function SearchMenu() {
    const [startdate, setStartdate] = useState({})
    const [metadate, setMetadate] = useState({})

  return (
    <div>
        <StartSearch  setStartdate= {setStartdate}/>
        <MetaSearch  setMetadate= {setMetadate}/>
        <Link className="border-4"
        to="/map"
        state={{
            start: startdate,
            meta: metadate,
        }}
        > Mapa
      </Link>
    </div>
  )
}

export default SearchMenu