import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-bg_color min-h-[98vh] text-text_color flex  items-center relative">
      <Image width={400} height={400} src={'/home/my_photo.jpeg'} alt="foto mikael" className="opacity-80 rounded-[0.5rem] absolute left-[12%] top-[10%]"  style={{ boxShadow: "rgba(33, 101, 150, 0.8) -0.7rem 0.7rem 1px"}}></Image>

      <section className="absolute top-[10%] left-[39%]"> 
        <h1 className="text-[5vw] font-bold font-lexend">
          I'm MIKAEL CAUA
          <br></br>
          brazilian Web
          <br></br> 
          Developer</h1>

          <div className="flex items-center justify-center p-4">
          <h3 className="text-justify font-laila text-[1.2rem] opacity-90 ">I study Computer Science at UFMA and </h3>
          </div>

      </section>
    </main>
  );
}
