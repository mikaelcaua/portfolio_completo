import Image from "next/image"
import BotaoProjeto from "../botao_projeto"

interface ExpirenceSectionProps{
    title:string
    children:string
    src:string
    reverse:boolean
    href:string
}

export default function ExpirenceSection({title,children,src,reverse,href}:ExpirenceSectionProps){
    return(
            
            <section className="p-[1rem] md:p-[2rem] flex items-center flex-col w-[90%] gap-[0.5rem] border-[2px] border-secundary_color rounded-[2rem]">

                <h1 className="text-text_color text-[1.5rem] md:text-[2.3rem] font-outfit font-bold bg-primary_color text-center pr-[0.5rem] pl-[0.5rem] rounded-[0.5rem]">
                    {title}
                </h1>
                    
                <div>

                    <div className={`flex justify-center gap-[1rem] items-center flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''}`}>
                        <Image className="rounded-[0.5rem] w-[10.5rem] h-[10.5rem] pt-[1rem] pb-[1rem] md:pb-0 md:pt-0 md:w-[16rem] md:h-[16rem]" alt={title} src={src} width={250} height={250} ></Image>
                        
                        <p className="text-text_color text-justify h-[70%] break-words max-w-[90vw] md:max-w-[60vw] text-[1rem] md:text-[1.5rem]">
                            {children}
                        </p>
                    </div>

                    <div className={`flex items-center justify-center ${reverse?'md:justify-start':'md:justify-end'} pt-[2rem]`}>
                        <BotaoProjeto href={href}/>
                    </div>

                </div>
                

                
                
                
                
                
            </section>
        
    )
}