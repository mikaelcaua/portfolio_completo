import ExpirenceSection from "@/components/expirence_section"
import Image from "next/image"

export default function Expirence(){
    return(
        <main className="min-h-[98vh] bg-bg_color flex flex-col gap-[1.5rem]">
            <img src="/expirence/receptionpet.jpg" alt="Mikael na recepção de calouros" className="w-[100%] max-h-[20rem]"/>

            <ExpirenceSection title={"Jovem Tech"} src={"/home/my_photo.jpeg"} reverse={false}>
                wdqwdqwdwqdsadasdasdasdasdsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdddddddddddddddddddddddddddddddddddddddddddddasdddddddddddddddddddddddddddddddsdddddddd
            </ExpirenceSection>

            <ExpirenceSection title={"Laboratório"} src={"/home/my_photo.jpeg"} reverse={true}>
                wdqwdqwdwqdsadasdasdasdasdsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdddddddddddddddddddddddddddddddddddddddddddddasdddddddddddddddddddddddddddddddsdddddddd
            </ExpirenceSection>

            <ExpirenceSection title={"PetComp"} src={"/home/my_photo.jpeg"} reverse={false}>
                wdqwdqwdwqdsadasdasdasdasdsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdddddddddddddddddddddddddddddddddddddddddddddasdddddddddddddddddddddddddddddddsdddddddd
            </ExpirenceSection>

            <ExpirenceSection title={"Monitorias"} src={"/home/my_photo.jpeg"} reverse={true}>
                wdqwdqwdwqdsadasdasdasdasdsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdddddddddddddddddddddddddddddddddddddddddddddasdddddddddddddddddddddddddddddddsdddddddd
            </ExpirenceSection>

            <ExpirenceSection title={"Maratonas de Programação"} src={"/home/my_photo.jpeg"} reverse={false}>
                wdqwdqwdwqdsadasdasdasdasdsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdddddddddddddddddddddddddddddddddddddddddddddasdddddddddddddddddddddddddddddddsdddddddd
            </ExpirenceSection>
        </main>
    )
}