import Image from "next/image"
import { ReactElement } from "react"

interface ExpirenceSectionProps{
    title:string
    children:string
    src:string
    reverse:boolean
}

export default function ExpirenceSection({title,children,src,reverse}:ExpirenceSectionProps){
    const reverseImage = reverse?"row-reverse":"row"
    return(
        <section className="p-[2rem] flex items-center flex-col w-[100%] gap-[0.5rem]">
            <h1 className="text-text_color text-[2.3rem] font-lexend font-bold">{title}</h1>
            <div className={"flex flex-"+reverseImage+" justify-center gap-[1rem]"}>
                <Image alt={title} src={src} width={250} height={250}></Image>
                <p className="text-white h-[70%] break-words max-w-[60vw] text-[1.5rem] font-laila pt-[1rem]">
                    qwpidhqwdnqwdqwopndwqqqqqqqqwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqasddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddsadddddddddddddddddddddddddddddddddddddddddddddddddasddddddddddasssssssssssssssssssssssssssssssssssssssssssssss
                </p>
                

            </div>
                
           
        </section>
    )
}

