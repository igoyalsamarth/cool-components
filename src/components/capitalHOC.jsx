const withCapitalLetters = (WrappedComponent) => {
    const EnhancedComponent = ({text, ...props}) => {
        const capitalText = text.toUpperCase();
        return <WrappedComponent text={capitalText} {...props} />
    }
    return EnhancedComponent
}

const MyComponent = ({text}) => {
    return(
    <p>{text}</p>
    )
}

const MyEnhancedComponent = withCapitalLetters(MyComponent)

export default function MyCapitalHOC(){
    return(
    <MyEnhancedComponent text={'yo is this a texting'}/>
    );
}