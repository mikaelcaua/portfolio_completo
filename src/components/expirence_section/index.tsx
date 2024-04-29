import Image from "next/image"

interface ExpirenceSectionProps{
    title:string
    children:string
    src:string
    reverse:boolean
}

export default function ExpirenceSection({title,children,src,reverse}:ExpirenceSectionProps){
    const reverseImage:string[] = reverse?["flex-row-reverse","0.7rem"]:["flex-row","-0.7rem"]
    return(
            
            <section className="p-[2rem] flex items-center flex-col w-[100%] gap-[0.5rem] ">

                <h1 className="text-text_color text-[2.3rem] font-outfit font-bold bg-primary_color text-center pr-[0.5rem] pl-[0.5rem] rounded-[0.5rem]">
                    {title}
                </h1>

                <div className={`flex ${reverseImage[0]} justify-center gap-[1rem] items-center`}>
                    <Image className="rounded-[0.5rem] w-[16rem] h-[16rem]" alt={title} src={src} width={250} height={250} ></Image>
                    
                    <p className="text-text_color h-[70%] break-words max-w-[60vw] text-[1.5rem]">
                        {children}
                    </p>
                </div>
                
            </section>
        
    )
}