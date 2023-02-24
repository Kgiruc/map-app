import { useEffect } from "react"
import L from "leaflet"
import "leaflet-routing-machine"
import "leaflet-routing-machine/dist/leaflet-routing-machine.css"
import { useMap } from "react-leaflet"
import { useLocation } from "react-router-dom"

function LeafletRouting() {
    const location = useLocation()
    console.log(location)
    const map = useMap();
    useEffect(()=>{
        L.Routing.control({
            waypoints: [
              L.latLng(location.state.start.start[0].lat,location.state.start.start[0].lon),
              L.latLng(location.state.meta.meta[0].lat,location.state.meta.meta[0].lon)
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
            }),
          }).addTo(map);
    },[])
  return null
}

export default LeafletRouting