import { useState } from "react";

export default function OptionsInput(){

    const country = [
        "Amsterdam",
        "Berlin",
        "London",
        "New York",
        "Paris",
        "Rome",
        "San Francisco",
        "Tokyo",
        "Washington DC",
        "Zurich",
        "Copenhagen",
        "Helsinki",
        "Madrid",
        "Reykjavik",
        "Stockholm",
        "Vancouver",
        "Vienna",
        "Zagreb",
        "Budapest",
        "Dublin",
        "Hamburg",
        "Krakow",
        "Lisbon",
        "Ljubljana"
      ];
      const [listOfCountry, setListOfCountry] = useState(country)
      const [selected, setSelected] = useState([])
      const [show, setShow] = useState(false)
      const [search, setSearch] = useState('')

      const handleChange = (e) => {
        setSearch(e.target.value)

        const newListOfCountry = listOfCountry.filter(Item => Item.toLowerCase().includes(search.toLowerCase()))
        setListOfCountry(newListOfCountry);
      }

      const handleOptionClick = (option) => {
        setSelected([...selected, option])
        const newListOfCountry = listOfCountry.filter(Item => !Item.toLowerCase().includes(option.toLowerCase()))
        setListOfCountry(newListOfCountry)
        setShow(false)
      }

    return(
        <div className="flex flex-wrap border border-neutral-300 w-fit gap-4">
            {selected.length > 0 &&
            selected.map(Item => {return(
                <p className="border border-black rounded-full px-3 py-1">{Item}</p>
            )})}
            <div className="flex flex-col relative">
            <input
            className=" bg-transparent"
            type="text"
            onFocus={() => setShow(true)}
            onChange={(e) => handleChange(e)}
            />
            {show && listOfCountry.length > 0 && 
                <ul className="absolute flex flex-col top-6 rounded overflow-clip h-40 overflow-y-auto">
                    {listOfCountry.map(Item => {return(
                        <button className="p-2 border border-black hover:bg-neutral-300 bg-white" onClick={() => handleOptionClick(Item)}>{Item}</button>
                    )})

                    }
                </ul>
            }
            </div>
        </div>
    );
}