import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';


function DistanceResult({ distance }) {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: `${distance.origin_addresses}`,
        onAfterPrint: () => alert("Print success")
    })


    const kilometrowka = 1.2
    const dystans = distance.rows[0].elements[0].distance.value / 1000
    const wynikdnia = Math.round((dystans / 800)) * 1000
    const all = Math.round((wynikdnia + (dystans * kilometrowka)))

    return (
        <>
            <div className='bg-green-400' ref={componentRef}>
                <ul>
                    <li>{distance.origin_addresses}</li>
                    <li>{distance.destination_addresses}</li>
                    <li>dystans: {dystans}km</li>
                    <li>stały mnożnik: {kilometrowka}km</li>
                    <li>1000 zł za dzień x {wynikdnia} dni</li>
                    <li>bez podatku: {all}</li>
                    <li>z podatkiem :{all * 10 / 100 + all}zł</li>
                </ul>
                <button
                className='border-2 border-black bg-blue-200' 
                onClick={handlePrint}>
                Print pdf
            </button>
            </div>
            
        </>
    )
}

export default DistanceResult