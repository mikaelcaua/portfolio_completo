// import Link from "next/link"

// export default function NavBar(){
//     const styleLink="hover:bg-primary_color hover:text-text_color pt-10 pb-10 pr-4 pl-4 md:pr-8 md:pl-8 rounded-b-[0.5rem] font-bold transition duration-300 font-outfit text-secundary_color"

//     const styleNav = "flex text-[1.2rem] md:text-[1.5rem] text-text_color items-center"
//     return(
//         <nav className={styleNav}>
//             <Link href={'./'} className={styleLink}>About me</Link>

//             <Link href={'./experience'} className={styleLink}>Experience</Link>

//             <Link href={'./contact'} className={styleLink}>Contact</Link>
//         </nav>
//     )
// }
import Link from "next/link"
import { useRouter } from 'next/router';

export default function NavBar(){
    const router = useRouter();

    // Estilos base para os links da barra de navegação
    const linkStyle = "hover:bg-primary_color hover:text-text_color pt-10 pb-10 pr-4 pl-4 md:pr-8 md:pl-8 rounded-b-[0.5rem] font-bold transition duration-300 font-outfit text-secundary_color";

    // Estilos base para a barra de navegação
    const navStyle = "flex text-[1.2rem] md:text-[1.5rem] text-text_color items-center gap-[5px]";

    // Função para determinar se o link está ativo
    const isLinkActive = (href:string) => {
        return router.pathname === href ? "bg-primary_color text-text_color rounded-b-[0.5rem]" : "bg-bg_color";
    };

    return(
        <nav className={navStyle}>
            <Link href={'./'} className={`${linkStyle} ${isLinkActive('/')}`}>
                About me
            </Link>

            <Link href={'./experience'} className={`${linkStyle} ${isLinkActive('/experience')}`}>
                Experience
            </Link>

            <Link href={'./contact'} className={`${linkStyle} ${isLinkActive('/contact')}`}>
                Contact
            </Link>
        </nav>
    )
}
