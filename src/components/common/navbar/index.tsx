import Link from "next/link"

export default function NavBar(){
    const styleLink="md:hover:bg-primary_color md:hover:text-text_color pt-10 pb-10 pr-4 pl-4 md:pr-8 md:pl-8 rounded-b-[0.5rem] font-bold transition duration-300 font-outfit text-secundary_color"

    const styleNav = "flex text-[1.2rem] md:text-[1.5rem] text-text_color items-center"
    return(
        <nav className={styleNav}>
            <Link href={'./'} className={styleLink}>About me</Link>

            <Link href={'./experience'} className={styleLink}>Experience</Link>

            <Link href={'./contact'} className={styleLink}>Contact</Link>
        </nav>
    )
}