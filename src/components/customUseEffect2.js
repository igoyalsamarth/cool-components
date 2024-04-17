import { useRef } from "react"

export default function customUseEffect2(effect, deps){
    const initialRender = useRef(true)
    const prevDeps = useRef(null)

    if(initialRender.current){
        initialRender.current = false;
        effect();
        return;
    }

    const hasChanged = deps? JSON.stringify(prevDeps)!==JSON.stringify(deps) : true

    if(hasChanged){
        effect();
    }

    prevDeps = deps || []
}