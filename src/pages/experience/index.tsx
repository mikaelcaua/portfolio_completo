import ExpirenceSection from "@/components/expirence_section"
import FadeEffect from "@/components/fade_effect"
import Image from "next/image"

export default function Expirence(){

    const experiences = [
        {'title':'Jovem Tech',
          'src':'/expirence/logo/jovem_tech.png',
          'reverse':false,
          'text':'O Programa Jovem Tech é uma iniciativa transformadora em São Luís do Maranhão, focada em capacitar jovens de escolas públicas no desenvolvimento web e análise de dados. Através de um currículo abrangente e prático, os participantes têm a oportunidade de adquirir habilidades técnicas essenciais, enquanto recebem suporte individualizado para orientação profissional. Com uma abordagem inclusiva e diversificada, o programa busca preparar uma nova geração de talentos para enfrentar os desafios e aproveitar as oportunidades do mundo digital, contribuindo assim para o crescimento econômico e social da região.'
        },
        
        {'title':'Laboratório',
          'src':'/expirence/logo/lacmor.png',
          'reverse':true,
          'text':'O Laboratório de Aprendizagem Computacional, Métodos de Otimização e Robótica (LACMOR), sob a coordenação do Professor Alexandre, é um espaço dinâmico onde o conhecimento é cultivado e as fronteiras da tecnologia são desafiadas. Como pesquisador neste laboratório, tive o privilégio de mergulhar em projetos inovadores que combinam inteligência artificial, otimização e robótica.'
        },

        {'title':'PetComp',
          'src':'/expirence/logo/pet_comp.png',
          'reverse':false,
          'text':" O Programa de Educação Tutorial de Ciência da Computação da UFMA (PETComp) é um espaço de aprendizado colaborativo onde tive o privilégio de ser bolsista. Nesse ambiente, além de ministrar disciplinas, também contribuí para o desenvolvimento web. Essa experiência não só aprimorou minhas habilidades técnicas, mas também me permitiu compartilhar conhecimentos e fortalecer os laços na comunidade acadêmica"
        },

        {'title':'Monitorias',
          'src':'/expirence/logo/ufma.png',
          'reverse':true,
          'text':"Assumi a responsabilidade de realizar monitorias em disciplinas fundamentais como Cálculo 1, Matemática Discreta e Lógica, onde pude compartilhar meu conhecimento e auxiliar outros estudantes em sua jornada acadêmica. Atualmente, sou encarregado de ministrar a monitoria da disciplina de Estrutura de Dados 1 na UFMA"
        },

        {'title':'Maratonas de Programação',
        'src':'/expirence/logo/maratona.jpg',
        'reverse':true,
        'text':'Participar de competições de programação é um hobby que me fascina, onde posso desafiar minhas habilidades em resolver problemas complexos através de algoritmos e lógica. Atualmente, estou concentrado em me preparar para a Maratona de Programação da SBC 2024, dedicando tempo para estudar e aprimorar minhas habilidades, ansioso para enfrentar os desafios que virão durante a competição.'
        }
    ]
    

    return(
        <main className="min-h-[98vh] bg-bg_color ">
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

