import FadeEffect from "@/components/fade_effect"
import Image from "next/image"
import Link from "next/link"

export default function Contact(){
    return(
        <main className="min-h-[98vh] bg-bg_color">
        <FadeEffect>
            <div className="min-h-[98vh] flex flex-col md:flex-row bg-bg_color text-white w-[100%] text-[1.5rem] items-center justify-center gap-[5rem] md:gap-[5%]">
                <section className="flex flex-col gap-[5rem] md:gap-[2rem]">
                    <p className="break-words max-w-[90vw] md:max-w-[50vw] text-text_color text-[1rem] md:text-[1.5rem] text-justify">
                        Contate-me para serviços de desenvolvimento e manutenção de suas aplicações web e mobile, assim como fornecer suporte para manter seus sistemas computacionais em pleno funcionamento. E se você deseja aprender programação ou aprimorar suas habilidades, estou aqui para te guiar nessa jornada. Meu compromisso é oferecer soluções eficientes e educativas, adaptadas às suas necessidades específicas.
                    </p>
                    <div className="flex flex-row items-center justify-center gap-[1rem]">
                        <Link target="_blank" href="https://www.linkedin.com/in/mikael-cau%C3%A3-silva/">
                            <Image width={32} height={32}  alt="linkedin logo" src={"/contact/linkedin.svg"}></Image>
                        </Link>

                        <Link target="_blank" href="https://www.instagram.com/mik4ellll">
                            <Image width={32} height={32}  alt="instagram logo" src={"/contact/instagram.svg"}></Image>
                        </Link>

                        <Link target="_blank" href="https://wa.me/5598988309055">
                            <Image width={32} height={32}  alt="whatsapp logo" src={"/contact/whatsapp.svg"}></Image>
                        </Link>

                        <Link target="_blank" href="https://github.com/mikaelcaua">
                            <Image width={32} height={32}  alt="github logo" src={"/contact/github.svg"}></Image>
                        </Link>

                        <Link target="_blank" href="https://www.youtube.com/@mikael_caua">
                            <Image width={32} height={32}  alt="youtube logo" src={"/contact/youtube.svg"}></Image>
                        </Link>

                    </div>
                </section >

                <section className="flex flex-row md:flex-col items-center justify-center gap-[0.8rem]">
                    <h2 className="text-[0.9rem] md:text-[2.2rem] font-outfit font-bold text-[#2F74C0]">TypeScript</h2>
                    <h2 className="text-[0.9rem] md:text-[2.2rem] font-outfit font-bold text text-[#5ED3F3]">ReactJS</h2>
                    <h2 className="text-[0.9rem] md:text-[2.2rem] font-outfit font-bold ">NextJS</h2>
                    <h2 className="text-[0.9rem] md:text-[2.2rem] font-outfit font-bold text-[#d6472e]">Java</h2>
                    <h2 className="text-[0.9rem] md:text-[2.2rem] font-outfit font-bold text-[#6aad3d]">SpringBoot</h2>
                </section>

            </div>
        </FadeEffect>
        </main>
    )
}