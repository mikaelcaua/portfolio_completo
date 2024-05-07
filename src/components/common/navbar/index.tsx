
import Link from "next/link"
import { useRouter } from 'next/router';

export default function NavBar(){
    const router = useRouter();

    const linkStyle = "md:hover:bg-primary_color md:hover:text-text_color pt-10 pb-10 pr-4 pl-4 md:pr-8 md:pl-8 rounded-b-[0.5rem] font-bold transition duration-300 font-outfit text-secundary_color";

    const navStyle = "flex text-[1.2rem] md:text-[1.5rem] text-text_color items-center gap-[5px]";

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
