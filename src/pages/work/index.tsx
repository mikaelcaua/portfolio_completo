import ExpirenceSection from "@/components/expirence_section"
import FadeEffect from "@/components/fade_effect"
import Image from "next/image"
import { useRouter } from "next/router";
import { useSwipeable } from 'react-swipeable';
import { projects} from "@/data";
export default function Project(){

    const router = useRouter();

    const handlers = useSwipeable({
      onSwiped: (eventData) => {
        if (eventData.dir === 'Left') {
          router.push('/contact');
        }
        if (eventData.dir === 'Right') {
          router.push('/');
        }
      }
    });

    return(
        <main className="min-h-[98vh] bg-bg_color pb-10"  {...handlers}>
            <FadeEffect>
                <div className="flex flex-col gap-[2rem] items-center justify-center">
                    <Image src={'/work/receptionpet.jpg'} width={250} height={250} alt={'Mikael na recepção de calouros'} className="w-[100%] h-[7rem] md:h-[6%]" unoptimized></Image>

                    {projects.map(e => 
                    <ExpirenceSection key={e.title} title={e.title} src={e.src} reverse={e.reverse} href={e.href}>
                        {e.text}
                    </ExpirenceSection>
                    )}
                </div>
            </FadeEffect>
        </main>
    )
}

