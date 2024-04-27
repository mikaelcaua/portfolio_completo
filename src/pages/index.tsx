import Image from "next/image";

export default function Home() {
  return (
    
    <main className="bg-bg_color min-h-[98vh] text-text_color flex flex-col justify-center items-center pr-[5%] pl-[5%] gap-[3rem] pb-[4%]">

       
        <section className="flex justify-center items-center gap-[5%]">
          <Image width={250} height={200} src={'/home/my_photo.jpeg'} alt="foto mikael" className="opacity-80 rounded-[2rem] w-[25vw]"  style={{ boxShadow: "#20b7e0 -0.7rem 0.7rem 1px"}} unoptimized></Image>

            <h1 className="text-[6vw] font-bold font-lexend text-white">
              I'm <strong className="text-terciary_color">MIKAEL</strong>
              <br></br>
              Brazilian
              <br></br>
              Web <strong className="text-terciary_color">Developer</strong></h1>
        </section>


        <p className="text-justify text-[1.3vw] opacity-90 max-w-[80%]">I study Computer Science at UFMA andI study Computer Science at UFMA andI study Computer Science at UFMA andI study Computer Science at UFMA andI study Computer Science at UFMA andI study Computer Science at UFMA andI study Computer Science at UFMA andI study Computer Science at UFMA andI study Computer Science at UFMA andI study Computer Science at UFMA andI study Computer Science at UFMA andI study Computer Science at UFMA andI study Computer Science at UFMA andI study Computer Science at UFMA andI study Computer Science at UFMA and 
        </p>
       

 
    </main>
  );
}
