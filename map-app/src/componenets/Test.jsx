import { useEffect } from "react"
import { useLocation } from "react-router-dom"

function Test(props) {
    const location = useLocation()
    console.log(location.state.data[0].lon)
  return (
    <div>
      <p>{location.state.data[0].lon}</p>
      <p>{location.state.data[0].lat}</p>
    </div>
  )
}

export default Test