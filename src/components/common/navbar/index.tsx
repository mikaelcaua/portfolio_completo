import Link from "next/link"

export default function NavBar(){
    const styleLink="hover:bg-primary_color hover:text-text_color pt-10 pb-10 pr-8 pl-8 rounded-b-[0.5rem] font-bold transition duration-300 font-outfit text-secundary_color"

    const styleNav = "flex text-[1.3rem] text-text_color"
    return(
        <nav className={styleNav}>
            <Link href={'./'} className={styleLink}>About me</Link>

            <Link href={'./expirence'} className={styleLink}>Experience</Link>

            <Link href={'./contact'} className={styleLink}>Contact</Link>
        </nav>
    )
}