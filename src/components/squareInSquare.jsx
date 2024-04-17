export default function NewComponent(){

    const recursiveFunction = (value) => {
        value = value -1
        if(value > 0){
        return <div className="border border-black aspect-square flex items-center justify-center" style={{width:value*100}}>
            {recursiveFunction(value)}
        </div>
        }
    }

    return(
null    );
}