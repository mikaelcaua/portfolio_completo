import Image from "next/image"
import Link from "next/link"

export default function Contact(){
    return(
        <main className="min-h-[98vh] flex bg-bg_color text-white w-[100%] text-[1.5rem] items-center justify-center
        gap-[5%]">
            <section className="flex flex-col gap-[2rem]">
                <p className="break-words max-w-[50vw] text-text_color">
                    dnioqwdnuqwndiqwdiqwndiqwndiqwndiqwndiwqnidnqwidqwidnddsadasdasdasdqwu9dhwquhdiuqwdiqwdiqwndinqwdinqwidnqwindqiwndiqwndwqndiqwdiqwndinqwidniqwdniqwndiqwnduqwbduqbwudbwqydbyqwdbwqbdqwbduqwbdqwdbiqwdiqwdbiqdbiuwqdubqwdbuqwbduqwbudqwbudqwbudbquwdbuq
                </p>
                <div className="flex flex-row items-center justify-center gap-[1rem]">
                    <Link target="_blank" href="">
                        <Image width={32} height={32}  alt="linkedin logo" src={"/contact/linkedin.svg"}></Image>
                    </Link>

                    <Link target="_blank" href="">
                        <Image width={32} height={32}  alt="instagram logo" src={"/contact/instagram.svg"}></Image>
                    </Link>

                    <Link target="_blank" href="">
                        <Image width={32} height={32}  alt="whatsapp logo" src={"/contact/whatsapp.svg"}></Image>
                    </Link>

                    <Link target="_blank" href="">
                        <Image width={32} height={32}  alt="github logo" src={"/contact/github.svg"}></Image>
                    </Link>

                    <Link target="_blank" href="">
                        <Image width={32} height={32}  alt="youtube logo" src={"/contact/youtube.svg"}></Image>
                    </Link>

                </div>
            </section >
           
            <section className="flex flex-col items-center justify-center gap-[0.8rem]">
                <h2 className="text-[2.2rem] font-outfit font-bold text-[#2F74C0]">TypeScript</h2>
                <h2 className="text-[2.2rem] font-outfit font-bold text text-[#5ED3F3]">ReactJS</h2>
                <h2 className="text-[2.2rem] font-outfit font-bold ">NextJS</h2>
                <h2 className="text-[2.2rem] font-outfit font-bold text-[#d6472e]">Java</h2>
                <h2 className="text-[2.2rem] font-outfit font-bold text-[#6aad3d]">SpringBoot</h2>
            </section>

        </main>
    )
}