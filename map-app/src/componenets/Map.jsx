import {MapContainer,TileLayer,Marker,Popup} from "react-leaflet";
import L from "leaflet";

import LeafletRouting from "./LeafletRouting";
import MatrixDistance from "./MatrixDistance";


function Map() {
    const position = [51.505, -0.09]
    return (
        <div>
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LeafletRouting />
        </MapContainer>
        <MatrixDistance />
        </div>
    )
}

let DefaultIcon = L.icon({
    iconUrl: "/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
  });
  L.Marker.prototype.options.icon = DefaultIcon;
export default Map;