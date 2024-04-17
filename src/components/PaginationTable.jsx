import { useState } from "react";

export default function PaginationTable(){
    const sampleTable = [
        {id:1, name: 'test1'},
        {id:2, name: 'test2'},
        {id:3, name: 'test3'},
        {id:4, name: 'test4'},
        {id:5, name: 'test5'},
        {id:6, name: 'test6'},
        {id:7, name: 'test7'},
        {id:8, name: 'test8'},
        {id:9, name: 'test9'},
        {id:10, name: 'test10'}
    ]
    const pageNumbers = sampleTable.length/5;
    const arr = Array.from({length:pageNumbers}, ((_,i) => i+1))
    const [page, setPage] = useState(0)
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                    </tr>
                </thead>
                <tbody>
                    {sampleTable.length > 0 && 
                    sampleTable.slice(page*5,page*5 + 5).map(Item => (
                        <tr>
                            <td>{Item.id}</td>
                            <td>{Item.name}</td>
                        </tr>
                    ))
                        
                    }
                </tbody>
            </table>
                    <div className="flex">
                        <button onClick={() => setPage(page-1)}>{`<`}</button>
                        {arr.length > 0 && 
                            arr.map(Item => (
                                <button onClick={() => setPage(Item-1)}>{Item}</button>
                            ))
                        }
                        <button onClick={() => setPage(page+1)}>{`>`}</button>
                    </div>
        </div>
    );
}