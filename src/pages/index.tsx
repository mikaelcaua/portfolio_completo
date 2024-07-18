// // import DigitationText from "@/components/digitation_text.tsx";
// // import FadeEffect from "@/components/fade_effect";
// // import Image from "next/image";
// // import { useRouter } from "next/router";
// // import { useSwipeable } from 'react-swipeable';

// // export default function AboutMe() {
// //   const words = [ 'Software','Developer']
// //   const router = useRouter();

// //   const handlers = useSwipeable({
// //     onSwiped: (eventData) => {
// //       if (eventData.dir === 'Left') {
// //         router.push('/work');
// //       }
// //     }
// //   });

// //   return (
// //     <main className="bg-bg_color min-h-[90vh] flex items-center" {...handlers}>
// //         <FadeEffect>
// //           <div className="text-text_color flex flex-col justify-center items-center pr-[5%] pl-[5%] gap-[2rem] pb-[4%]">
// //             <section className="flex flex-col-reverse md:flex-row justify-center items-center gap-[5%]">
              
// //               <div className="flex relative">
// //                 <Image width={300} height={300} src={'/home/my_photo.jpeg'} alt="foto mikael" className="opacity-80 rounded-[2rem] w-[60vw] md:w-[30vw] md:block"  style={{ boxShadow: "#20b7e0 -0.8rem 1rem 1px"}} unoptimized></Image>
                
// //               </div>

// //               <strong className="text-terciary_color text-[3.6rem] md:text-[6vw] font-bold font-lexend md:hidden">
// //                   <DigitationText wordsVector={words}/>
// //               </strong>

// //               <h1 className=" text-[3.6rem] md:text-[6vw] font-bold font-lexend text-white">
// //                 eu sou <br/><strong>MIKAEL<br/>Cauã</strong>,
// //               </h1>

// //               <strong className="text-terciary_color text-[3.6rem] md:text-[6vw] font-bold font-lexend">
// //                   <DigitationText wordsVector={words}/>
// //               </strong>

              
// //             </section>


// //             <p className="text-left text-[1rem] md:text-[1.5rem] opacity-90 md:max-w-[80%]">Meu nome é Mikael Cauã, estou cursando Ciência da Computação na UFMA e sou apaixonado por matemática e algoritmos. Atuo como desenvolvedor web, com foco especial no uso de NextJS e Java Spring Boot. Além disso, trabalho como professor auxiliar e monitor em disciplinas relacionadas à programação.
// //             </p>

// //           </div>
          
// //         </FadeEffect>
        
// //     </main>
// //   );
// // }
// import DigitationText from "@/components/digitation_text.tsx";
// import FadeEffect from "@/components/fade_effect";
// import Image from "next/image";
// import { useRouter } from "next/router";
// import { useSwipeable } from 'react-swipeable';

// export default function AboutMe() {
//   const words = ['Software', 'Developer'];
//   const router = useRouter();

//   const handlers = useSwipeable({
//     onSwiped: (eventData) => {
//       if (eventData.dir === 'Left') {
//         router.push('/work');
//       }
//     }
//   });

//   return (
//     <main className="bg-bg_color min-h-[90vh] flex items-center" {...handlers}>
//       <FadeEffect>
//         <div className="text-text_color flex flex-col justify-center items-center px-[5%] gap-[2rem] pb-[4%]">
//           <section className="flex flex-col-reverse md:flex-row justify-center items-center gap-[5%]">
//             <div className="flex relative">
//               <Image 
//                 width={300} 
//                 height={300} 
//                 src={'/home/my_photo.jpeg'} 
//                 alt="foto mikael" 
//                 className="opacity-80 rounded-[2rem] w-[60vw] md:w-[30vw]" 
//                 style={{ boxShadow: "#20b7e0 -0.8rem 1rem 1px" }} 
//                 unoptimized 
//               />
//             </div>

//             <h1 className="text-[3.6rem] md:text-[6vw] font-bold font-lexend text-white">
//               eu sou <br />
//               <strong>MIKAEL<br />Cauã</strong>,
//               <strong className="text-terciary_color text-[3.6rem] md:text-[6vw] font-bold font-lexend">
//               <DigitationText wordsVector={words} />
//             </strong>
//             </h1>



//           </section>

//           <p className="text-justify text-[1rem] md:text-[1.5rem] opacity-90 md:max-w-[80%]">
//             Meu nome é Mikael Cauã, estou cursando Ciência da Computação na UFMA e sou apaixonado por matemática e algoritmos. Atuo como desenvolvedor web, com foco especial no uso de NextJS e Java Spring Boot. Além disso, trabalho como professor auxiliar e monitor em disciplinas relacionadas à programação.
//           </p>
//         </div>
//       </FadeEffect>
//     </main>
//   );
// }
import DigitationText from "@/components/digitation_text.tsx";
import FadeEffect from "@/components/fade_effect";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSwipeable } from 'react-swipeable';

export default function Home() {
  const words = ['Software', 'Developer']
  const router = useRouter();

  const handlers = useSwipeable({
    onSwiped: (eventData) => {
      if (eventData.dir === 'Left') {
        router.push('/work');
      }
    }
  });

  return (
    <main className="bg-bg_color min-h-[90vh] flex items-center" {...handlers}>
        <FadeEffect>
          <div className="text-text_color flex flex-col justify-center items-center pr-[5%] pl-[5%] gap-[2rem] pb-[4%]">
            <section className="flex flex-col-reverse md:flex-row justify-center items-center gap-[5%]">
              
              <div className="flex relative">
                <Image width={300} height={300} src={'/home/my_photo.jpeg'} alt="foto mikael" className="opacity-80 rounded-[2rem] md:w-[25vw] md:block"  style={{ boxShadow: "#20b7e0 -0.4rem 0.5rem 0.1px"}} unoptimized></Image>
                
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


            <p className="text-justify text-[1rem] md:text-[1.5rem] opacity-90 md:max-w-[80%]">My name is Mikael Cauã, I am studying Computer Science at UFMA, and I am passionate about mathematics and algorithms. I work as a web developer, with a special focus on the use of NextJS and Java Spring Boot. Additionally, I work as a teaching assistant and monitor in programming-related courses.
            </p>

          </div>
          
        </FadeEffect>
        
    </main>
  );
}