import { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';


function DistanceResult({ distance }) {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: `${distance.origin_addresses}`,
        onAfterPrint: () => alert("Print success")
    })

    const [kilometrowka, setKilometrowka] = useState()
    const [numbers, setNumbers] = useState()

    const dystans = distance.rows[0].elements[0].distance.value / 1000
    const wynikdnia = Math.round((dystans / 800)) * 1000
    const all = Math.round((wynikdnia + (dystans * kilometrowka)))

    return (
        <div className='bg-gray-400 z-10'>
            {
                kilometrowka ? (
                    <div className='flex flex-col justify-center items-center text-sm ml-5
                    md:text-xl'
                        ref={componentRef}>
                        <ul className='flex flex-col gap-[2px]'>
                            <li className='font-bold'>Punkt początkowy: {distance.origin_addresses}</li>
                            <li className='font-bold'>Cel podróży: {distance.destination_addresses}</li>
                            <li>dystans: {dystans}km</li>
                            <li>stały mnożnik: {kilometrowka}zł/km</li>
                            <li>1000 zł za dzień x {wynikdnia} dni</li>
                            <li>bez podatku: {all}</li>
                            <li className='font-bold underline'>z podatkiem :{all * 10 / 100 + all}zł</li>
                        </ul>
                        <button
                            className='absolute bottom-2 right-4 border-2 border-black p-3 bg-blue-200 '
                            onClick={handlePrint}>
                            Print pdf
                        </button>
                    </div>) :
                    (
                        <div className="h-[30vh] flex flex-col justify-center items-center">
                            <label className='flex flex-col'>
                                Podaj cenę za kilometr:
                                <input
                                    className="border-4 text-center"
                                    type="text"
                                    value={numbers}
                                    onChange={e => setNumbers(e.target.value)}
                                />
                                <button
                                    className='mt-2 rounded-md border-2 border-red-200'
                                    onClick={() => setKilometrowka(numbers)}>
                                    przelicz
                                </button>
                            </label>
                        </div>
                    )
            }
        </div>
    )
}

export default DistanceResult