import { useEffect } from "react"
import L from "leaflet"
import "leaflet-routing-machine"
import "leaflet-routing-machine/dist/leaflet-routing-machine.css"
import { useMap } from "react-leaflet"
import { useLocation } from "react-router-dom"

function LeafletRouting() {
    const location = useLocation()
    console.log(location.state.data[0].lon)
    const map = useMap();
    useEffect(()=>{
        L.Routing.control({
            waypoints: [
              L.latLng(52.215933,19.134422),
              L.latLng(54.4109754,18.600087546907808)
            ],
            lineOptions:{
                styles: [
                    {
                        color: 'blue',
                        weight: 4,
                        opacity: 0.7,
                    }
                ]
            },
            routeWhileDragging: false,
            geocoder: L.Control.Geocoder.nominatim(() => {
              console.log(e)
            }),
          }).addTo(map);
    },[])
  return null
}

export default LeafletRouting