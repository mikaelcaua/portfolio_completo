import React from "react"
import { useTypewriter,Cursor } from "react-simple-typewriter"

interface DigitationTextProps{
    wordsVector:string[]
}

export default function DigitationText({wordsVector}:DigitationTextProps){
    const [text] = useTypewriter({
        words:wordsVector,
        loop:true,
        typeSpeed:100,
        deleteSpeed:70
    })
    return(
        <>
            <p>
                {text}<span className="text-terciary_color"><Cursor cursorStyle='|'/></span>
            </p>
        </>
    )
}