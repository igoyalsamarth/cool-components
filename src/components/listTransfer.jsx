import { useState } from "react";

export default function NewComponent2() {
    const list1 = ['a', 'b', 'c', 'd']
    const list2 = ['e', 'f', 'g', 'h']

    const [stateList1, setStateList1] = useState(list1)
    const [stateList2, setStateList2] = useState(list2)
    const [selectedArr, setSelectedArr] = useState([])

    const handleSelection = (value) => {
        if(!selectedArr.includes(value)){
            setSelectedArr([...selectedArr, value])
        }
    }
    const transferSelectedToList2 = () => {
        setStateList1(stateList1.filter(item => !selectedArr.includes(item)))
        setStateList2([...stateList2, ...selectedArr])
        setSelectedArr([])
    }
    const transferSelectedToList1 = () => {
        setStateList2(stateList2.filter(item => !selectedArr.includes(item)))
        setStateList1([...stateList1, ...selectedArr])
        setSelectedArr([])
    }

    return (
        <div className="flex w-full justify-evenly">
            <div className="flex flex-col border border-black w-full px-8">

                {stateList1.map(Item => (
                        <div key={Item} className="flex gap-4">
                            <input onChange={() => handleSelection(Item)} checked={selectedArr.includes(Item)} type="checkbox" />
                            <p>{Item}</p>
                        </div>
                ))}

            </div>
            <div className="flex flex-col border border-black gap-4 p-4">
                <button className="px-2 py-1 bg-neutral-400" onClick={() => {setStateList1([...stateList1, ...stateList2]),setStateList2([])}}> {`<<`}</button>
                <button className="px-2 py-1 bg-neutral-400" onClick={() => transferSelectedToList1()}> {`<`}</button>
                <button className="px-2 py-1 bg-neutral-400" onClick={() => transferSelectedToList2()}> {`>`}</button>
                <button className="px-2 py-1 bg-neutral-400" onClick={() => {setStateList2([...stateList1, ...stateList2]),setStateList1([])}}> {`>>`}</button>
            </div>
            <div className="flex flex-col border border-black w-full px-8">
            {stateList2.map(Item => (
                        <div key={Item} className="flex gap-4">
                            <input onChange={() => handleSelection(Item)} checked={selectedArr.includes(Item)} type="checkbox" />
                            <p>{Item}</p>
                        </div>
                ))}
            </div>
        </div>
    );
}