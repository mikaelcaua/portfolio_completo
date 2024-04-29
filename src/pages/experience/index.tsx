import ExpirenceSection from "@/components/expirence_section"
import FadeEffect from "@/components/fade_effect"

export default function Expirence(){

    const experiences = [
        {'title':'Jovem Tech',
          'src':'/expirence/logo/jovem_tech.png',
          'reverse':false,
          'text':'wdqwdqwdwqdsadasdasdasdasdsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdddddddddddddddddddddddddddddddddddddddddddddasdddddddddddddddddddddddddddddddsdddddddd'
        },
        
        {'title':'Laboratório',
          'src':'/expirence/logo/lacmor.png',
          'reverse':true,
          'text':'wdqwdqwdwqdsadasdasdasdasdsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdddddddddddddddddddddddddddddddddddddddddddddasdddddddddddddddddddddddddddddddsdddddddd'
        },

        {'title':'PetComp',
          'src':'/expirence/logo/pet_comp.png',
          'reverse':false,
          'text':'wdqwdqwdwqdsadasdasdasdasdsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdddddddddddddddddddddddddddddddddddddddddddddasdddddddddddddddddddddddddddddddsdddddddd'
        },

        {'title':'Monitorias',
          'src':'/expirence/logo/ufma.png',
          'reverse':true,
          'text':'wdqwdqwdwqdsadasdasdasdasdsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdddddddddddddddddddddddddddddddddddddddddddddasdddddddddddddddddddddddddddddddsdddddddd'
        },

        {'title':'Maratonas de Programação',
        'src':'/expirence/logo/maratona.jpg',
        'reverse':true,
        'text':'wdqwdqwdwqdsadasdasdasdasdsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdddddddddddddddddddddddddddddddddddddddddddddasdddddddddddddddddddddddddddddddsdddddddd'
        }
    ]
    

    return(
        <main className="min-h-[98vh] bg-bg_color ">
            <FadeEffect>
                <div className="flex flex-col">
                    <img src="/expirence/receptionpet.jpg" alt="Mikael na recepção de calouros" className="w-[100%] h-[10rem] md:h-[6%]"/>

                    {experiences.map(e => 
                    <ExpirenceSection key={e.title} title={e.title} src={e.src} reverse={e.reverse}>
                        {e.text}
                    </ExpirenceSection>
                    )}
                </div>
            </FadeEffect>
        </main>
    )
}

