import { useRef } from "react";

export default function customUseEffect(effect, deps) {
    
    const isFirstRender = useRef(true)
    const prevDeps = useRef([])

    if(isFirstRender.current){
        isFirstRender.current = false;
        effect();
        return;
    }

    const depsChanged = deps ? JSON.stringify(prevDeps) !== JSON.stringify(deps) : true;

    if(depsChanged){
        effect();
    }

    prevDeps.current = deps || []
}