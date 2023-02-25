import React from 'react'


function DistanceResult({ distance }) {


    const kilometrowka = 1.2
    const dystans = distance.rows[0].elements[0].distance.value / 1000
    const wynikdnia = Math.round((dystans / 800)) * 1000
    const all = wynikdnia + (800 * kilometrowka)

    return (
        <div className='bg-green-400'>
            <ul>
                <li>{distance.origin_addresses}</li>
                <li>{distance.destination_addresses}</li>
                <li>dystans: {dystans}km</li>
                <li>1000 zł za dzień: {wynikdnia}</li>
                <li>bez podatku: {all}</li>
                <li>z podatkiem :{all * 10 / 100 + all}zł</li>
            </ul>
        </div>
    )
}

export default DistanceResult