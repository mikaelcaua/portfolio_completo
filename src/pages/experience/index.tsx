import ExpirenceSection from "@/components/expirence_section"
import FadeEffect from "@/components/fade_effect"
import Image from "next/image"
import { useRouter } from "next/router";
import { useSwipeable } from 'react-swipeable';

export default function Expirence(){

    const router = useRouter();

    const handlers = useSwipeable({
      onSwiped: (eventData) => {
        if (eventData.dir === 'Left') {
          router.push('/contact');
        }
        if (eventData.dir === 'Right') {
          router.push('/');
        }
      }
    });

    const experiences = [
        {'title':'Jovem Tech',
          'src':'/expirence/logo/jovem_tech.png',
          'reverse':false,
          'text':'Atualmente faço parte do Programa Jovem Tech, uma iniciativa importante em São Luís do Maranhão com o objetivo de capacitar jovens de escolas públicas nas áreas de desenvolvimento web e análise de dados. Tendo como foco preparar diversos jovens para enfrentar os desafios do mundo digital e contribuir para o crescimento econômico e social do Maranhão.'
        },
        
        {'title':'Laboratório',
          'src':'/expirence/logo/lacmor.png',
          'reverse':true,
          'text':'O Laboratório de Aprendizagem Computacional, Métodos de Otimização e Robótica (LACMOR), sob a coordenação do Professor Alexandre, é um espaço dinâmico e tecnológico. Como pesquisador neste laboratório, tive o privilégio de mergulhar em projetos inovadores que combinam inteligência artificial, otimização e robótica.'
        },

        {'title':'PetComp',
          'src':'/expirence/logo/pet_comp.png',
          'reverse':false,
          'text':" Tive o privilégio de ser bolsista do Programa de Educação Tutorial de Ciência da Computação da UFMA (PETComp). Além de ministrar monitorias, trabalhei no desenvolvimento de sites e outras aplicações. Além disso, fui responsável pela organização de alguns eventos voltados para o curso de Ciência da Computação."
        },

        {'title':'Monitorias',
          'src':'/expirence/logo/ufma.png',
          'reverse':true,
          'text':"Fui responsável por realizar monitorias em disciplinas fundamentais como Cálculo 1, Matemática Discreta e Lógica... onde pude compartilhar meu conhecimento e auxiliar outros estudantes em sua jornada acadêmica. Atualmente, sou encarregado de ministrar a monitoria da disciplina de Estrutura de Dados 1 na UFMA"
        },

        {'title':'Maratonas de Programação',
        'src':'/expirence/logo/maratona.jpg',
        'reverse':false,
        'text':'Participar de competições de programação é um hobby que me interessa porque me permite enfrentar desafios com algoritmos complexos e trabalhosos. No momento, estou me preparando para o próximo desafio: a Maratona de Programação da SBC em 2024.'
        }
    ]
    

    return(
        <main className="min-h-[98vh] bg-bg_color "  {...handlers}>
            <FadeEffect>
                <div className="flex flex-col">
                    <Image src={'/expirence/receptionpet.jpg'} width={250} height={250} alt={'Mikael na recepção de calouros'} className="w-[100%] h-[7rem] md:h-[6%]" unoptimized></Image>

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

