import Image from "next/image"

interface ExpirenceSectionProps{
    title:string
    children:string
    src:string
    reverse:boolean
}

export default function ExpirenceSection({title,children,src,reverse}:ExpirenceSectionProps){
    const reverseImage:string[] = reverse?["flex-row-reverse","0.7rem"]:["flex-row","-0.7rem"]
    // style={{ boxShadow: "#8821e7 "+reverseImage[1]+" 0.7rem 1px"}}
    return(
        <section className="p-[2rem] flex items-center flex-col w-[100%] gap-[0.5rem] ">
            <h1 className="text-text_color text-[2.3rem] font-marker font-bold bg-primary_color">{title}</h1>
            <div className={`flex ${reverseImage[0]} justify-center gap-[1rem]`}>
                <Image className="rounded-[0.5rem] w-[16rem] h-[16rem]" alt={title} src={src} width={250} height={250} ></Image>
                
                <p className="text-white h-[70%] break-words max-w-[60vw] text-[1.5rem] pt-[1rem]">
                    {children}
                </p>
                

            </div>
                
           
        </section>
    )
}

