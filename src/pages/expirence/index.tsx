import ExpirenceSection from "@/components/expirence_section"
import FadeEffect from "@/components/fade_effect"

export default function Expirence(){

    const expirences = [
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
        <main className="min-h-[98vh] bg-bg_color flex flex-col">
            <FadeEffect>
                <>
                    <img src="/expirence/receptionpet.jpg" alt="Mikael na recepção de calouros" className="w-[100%] max-h-[20rem]"/>

                    {expirences.map(e => 
                    <ExpirenceSection title={e.title} src={e.src} reverse={e.reverse}>
                        {e.text}
                    </ExpirenceSection>
                    )}
                </>
            </FadeEffect>
        </main>
    )
}