import { ReactNode } from "react"
import { animated, useSpring } from "react-spring"

interface FadeTextProps{
    children:ReactNode|string
}

export default function FadeEffect({children}:FadeTextProps){
    const props = useSpring({
        to:{opacity:1},
        from:{opacity:0},
        delay:150,
        reset:true,
        reverse:false,
    })

    return(
        <animated.div style={props}>
            {children}            
        </animated.div>
    )
}