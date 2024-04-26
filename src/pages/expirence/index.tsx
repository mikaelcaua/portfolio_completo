import ExpirenceSection from "@/components/expirence_section"

export default function Expirence(){
    return(
        <main className="min-h-[98vh] bg-bg_color flex flex-col">
            <img src="/expirence/receptionpet.jpg" alt="Mikael na recepção de calouros" className="w-[100%] max-h-[20rem]"/>

            <ExpirenceSection title={"Jovem Tech"} src={"/expirence/logo/jovem_tech.png"} reverse={false}>
                wdqwdqwdwqdsadasdasdasdasdsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdddddddddddddddddddddddddddddddddddddddddddddasdddddddddddddddddddddddddddddddsdddddddd
            </ExpirenceSection>

            <ExpirenceSection title={"Laboratório"} src={"/expirence/logo/lacmor.png"} reverse={true}>
                wdqwdqwdwqdsadasdasdasdasdsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdddddddddddddddddddddddddddddddddddddddddddddasdddddddddddddddddddddddddddddddsdddddddd
            </ExpirenceSection>

            <ExpirenceSection title={"PetComp"} src={"/expirence/logo/pet_comp.png"} reverse={false}>
                wdqwdqwdwqdsadasdasdasdasdsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdddddddddddddddddddddddddddddddddddddddddddddasdddddddddddddddddddddddddddddddsdddddddd
            </ExpirenceSection>

            <ExpirenceSection title={"Monitorias"} src={"/expirence/logo/ufma.png"} reverse={true}>
                wdqwdqwdwqdsadasdasdasdasdsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdddddddddddddddddddddddddddddddddddddddddddddasdddddddddddddddddddddddddddddddsdddddddd
            </ExpirenceSection>

            <ExpirenceSection title={"Maratonas de Programação"} src={"/expirence/logo/maratona.jpg"} reverse={false}>
                wdqwdqwdwqdsadasdasdasdasdsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdddddddddddddddddddddddddddddddddddddddddddddasdddddddddddddddddddddddddddddddsdddddddd
            </ExpirenceSection>
        </main>
    )
}