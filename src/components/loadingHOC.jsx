import { useState } from "react";
import { useEffect } from "react";

const withLoadingScreen = (WrappedComponent) => {
    const EnhancedComponent = ({ isLoading, ...props }) => {
        return isLoading ? <p>Loading...</p> : <WrappedComponent {...props} />
    }
    return EnhancedComponent;
}

const MyComponent = () => {
    return(
    <p>Content</p>);
}

const MyEnhancedComponent = withLoadingScreen(MyComponent)

export default function RenderThis() {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    })


    return (
        <MyEnhancedComponent isLoading={loading}/>
    );
}