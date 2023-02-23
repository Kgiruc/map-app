import { useState } from "react";
import { Link } from "react-router-dom";

function SearchMenu() {
  const [start, setStart] = useState({
    ulica: '',
    numer: '',
    kraj: '',
  })
  return (
    <div className="text-3xl font-bold ">
      <form>
        <label>
          Ulica:
          <input
            type="text"
            value={start.ulica}
            onChange={e => setStart({...start, ulica: e.target.value})}
             />
        </label>
        <label>
          numer:
          <input
            type="text"
            value={start.numer}
            onChange={e => setStart({...start, numer: e.target.value})}
             />
        </label>
        <label>
          kraj:
          <input
            type="text"
            value={start.kraj}
            onChange={e => setStart({...start, kraj: e.target.value})}
             />
        </label>
        <Link to={
          {
            pathname: "test",
            start: start 
          }
        }>
          Mapa
        </Link>
      </form>
    </div>
  )
}

export default SearchMenu;
