import Image from "next/image"

interface ExpirenceSectionProps{
    title:string
    children:string
    src:string
    reverse:boolean
}

export default function ExpirenceSection({title,children,src,reverse}:ExpirenceSectionProps){
    const reverseImage:string[] = reverse?["flex-row-reverse","0.7rem"]:["flex-row","-0.7rem"]
    console.log(reverseImage)
    return(
        <section className="p-[2rem] flex items-center flex-col w-[100%] gap-[0.5rem] ">
            <h1 className="text-text_color text-[2.3rem] font-lexend font-bold">{title}</h1>
            <div className={`flex ${reverseImage[0]} justify-center gap-[1rem]`}>
                <Image className="rounded-[0.5rem]" alt={title} src={src} width={250} height={250} style={{ boxShadow: "var(--primary_color)"+reverseImage[1]+" 0.7rem 1px"}}></Image>
                
                <p className="text-white h-[70%] break-words max-w-[60vw] text-[1.5rem] font-laila pt-[1rem]">
                    {children}
                </p>
                

            </div>
                
           
        </section>
    )
}

