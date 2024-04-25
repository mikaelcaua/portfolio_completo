import Image from "next/image";

export default function Home() {
  return (
    
    <main className="bg-bg_color min-h-[98vh] text-text_color flex  justify-center items-center relative">
      <Image width={400} height={400} src={'/home/my_photo.jpeg'} alt="foto mikael" className="opacity-80 rounded-[0.5rem] absolute left-[12%] top-[2%] w-[30vw]"  style={{ boxShadow: "#8821e7 -0.7rem 0.7rem 1px"}}></Image>

      <section className="flex flex-col absolute top-[3%] left-[39%]"> 
        <h1 className="text-[5.2vw] font-bold font-lexend">
          I'm MIKAEL CAUA
          <br></br>
          brazilian Web
          <br></br> 
          Developer</h1>

          <div className="flex items-center justify-center p-4 w-[100%]">
            <p className="text-justify font-laila text-[1.3vw] opacity-90 max-w-[85%]">I study Computer Science at UFMA andI study Computer Science at UFMA andI study Computer Science at UFMA andI study Computer Science at UFMA andI study Computer Science at UFMA andI study Computer Science at UFMA andI study Computer Science at UFMA andI study Computer Science at UFMA andI study Computer Science at UFMA andI study Computer Science at UFMA andI study Computer Science at UFMA andI study Computer Science at UFMA andI study Computer Science at UFMA andI study Computer Science at UFMA andI study Computer Science at UFMA and </p>
          </div>

      </section>
    </main>
  );
}
