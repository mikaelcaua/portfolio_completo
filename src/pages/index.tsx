import DigitationText from "@/components/digitation_text.tsx";
import FadeEffect from "@/components/fade_effect";
import Image from "next/image";

export default function Home() {
  const words = ['Web', 'Developer']
  return (
    
    <main className="bg-bg_color min-h-[90vh] flex items-center">
        <FadeEffect>
          <div className="text-text_color flex flex-col justify-center items-center pr-[5%] pl-[5%] gap-[2rem] pb-[4%]">
            <section className="flex justify-center items-center gap-[5%]">

              <div className="flex relative">
                <Image width={250} height={200} src={'/home/my_photo.jpeg'} alt="foto mikael" className="opacity-70 rounded-[2rem] w-[25vw] hidden md:block"  style={{ boxShadow: "#20b7e0 -0.8rem 1rem 1px"}} unoptimized></Image>
                
              </div>

              <h1 className=" text-[15vw] md:text-[6vw] font-bold font-lexend text-white">
                I'm <strong className="text-terciary_color">MIKAEL</strong>,
                <br></br>
                Brazilian
                <br></br>
                <strong className="text-terciary_color">
                  <DigitationText wordsVector={words}/>
                </strong>
              </h1>
            </section>


            <p className="text-justify text-[1rem] md:text-[1.3vw] opacity-90 md:max-w-[80%]">Meu nome é Mikael Cauã, estou cursando Ciência da Computação na UFMA e sou apaixonado por matemática e algoritmos. Atuo como desenvolvedor web, com foco especial no uso de Next e Java Spring Boot. Além disso, trabalho como professor auxiliar e monitor em disciplinas relacionadas à programação.
            </p>
          </div>
        </FadeEffect>
        
    </main>

    
  );
}
