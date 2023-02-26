
import { useState } from 'react'
import { Link } from 'react-router-dom'
import StartSearch from "./StartSearch";
import MetaSearch from "./MetaSearch";

function SearchMenu() {
    const [startdate, setStartdate] = useState({})
    const [metadate, setMetadate] = useState({})

  return (
    <div className=
    'h-[100vh] flex flex-col justify-center items-center gap-12 bg-slate-600 text-white '>
        <StartSearch  setStartdate= {setStartdate}/>
        <MetaSearch  setMetadate= {setMetadate}/>
        <Link 
        className="p-1 pl-2 pr-2 border-4 rounded-xl border-green-500 text-2xl font-bold text-white
        hover:"
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