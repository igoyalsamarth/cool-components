import { useRef } from "react"
import { useState, useEffect } from "react"
import customUseEffect from "./customUseEffect"
export default function AnotherComponent() {



    const displayArr = Array.from({ length: 7 }, (_, i) => i + 1)
    const [arr, setArr] = useState([])

    const insertValueIntoArr = (value) => {
        if (!arr.includes(value)) {
            setArr([...arr, value])
        }
    }


    customUseEffect(() => {
        if (arr.length === displayArr.length) {
            setTimeout(() => {
                for (let i = 0; i < arr.length; i++) {
                    setTimeout(() => {
                        setArr(arr => arr.slice(0, - 1))
                    }, 1500 * i)
                }
            }, [2000])
        }
    }, [arr])

    return (
        <div className="flex gap-10 items-center justify-center">
            {displayArr.map(Item => {
                return <button key={Item} className={`aspect-square w-10 ${arr?.includes(Item) ? 'bg-red-300' : 'bg-orange-500'}`} onClick={() => insertValueIntoArr(Item)}>{Item}</button>
            })}
        </div>
    );
}