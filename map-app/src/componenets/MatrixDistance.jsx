import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import DistanceResult from './DistanceResult'


function MatrixDistance() {
    const [distance, setDistance] = useState([{}])
    const location = useLocation()
    console.log(location)
    
    const URL_DISTANCE = `https://api.distancematrix.ai/maps/api/distancematrix/json?origins=${location.state.start.start[0].lat},${location.state.start.start[0].lon}&destinations=${location.state.meta.meta[0].lat},${location.state.meta.meta[0].lon}&key=hEhFMQF6wuFOWDSYU4d2XBbwbwODF`

    useEffect(() => {
        fetch(URL_DISTANCE)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setDistance(data)
            })
            .catch(err => console.log(err.message))
    }, [])


    return (
        distance.rows ? (
            <DistanceResult distance = {distance}/>) :
            (<p>loading..</p>)
    )

}

export default MatrixDistance