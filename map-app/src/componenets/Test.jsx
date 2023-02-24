import { useEffect } from "react"
import { useLocation } from "react-router-dom"

function Test() {
    const location = useLocation()
    console.log(location)
  return (
    <div>
      <p>start:{location.state.start.start[0].lat}</p>
      <p>start:{location.state.start.start[0].lon}</p>
      <p>meta:{location.state.meta.meta[0].lat}</p>
      <p>meta:{location.state.meta.meta[0].lon}</p>
    </div>
  )
}

export default Test