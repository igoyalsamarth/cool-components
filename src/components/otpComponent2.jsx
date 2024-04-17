import { useEffect, useRef, useState } from "react";

export default function OTPComponent2() {

    const [otp, setOtp] = useState(new Array(4).fill(''))
    const inputRefs = useRef([])

    useEffect(() => {
        if(inputRefs.current[0]){
            inputRefs.current[0].focus()
        }
    },[])


    const handleChange = (index, e) => {
        const value = e.target.value;

        const newOtp = [...otp]
        newOtp[index] = value.substring(value.length - 1)
        setOtp(newOtp)

        if (value && index < otp.length - 1 && inputRefs.current[index + 1]) {
            inputRefs.current[index + 1].focus()
        }
    }

    return(
        <div className="flex gap-10 w-full justify-center">
            {otp.map((value, index) => {
                return (
                    <input
                        key={index}
                        type="text"
                        ref={(input) => (inputRefs.current[index] = input)}
                        value={value}
                        onChange={(e) => handleChange(index, e)}
                        className="aspect-square w-20 bg-neutral-200 border border-neutral-300 rounded-lg text-xl px-2 leading-none" />
                )
            })}
            <p>TEST</p>
        </div>

    );

}