import Link from "next/link"

export default function NavBar(){
    return(
        <nav className="flex font-laila font-semibold text-[1.5rem] text-text_color">
            <Link href={'./'} className="hover:bg-primary_color hover:text-text_color pt-10 pb-10 pr-8 pl-8 rounded-b-[0.5rem] font-bold transition duration-300">About me</Link>

            <Link href={'./expirence'} className="hover:bg-primary_color hover:text-text_color pt-10 pb-10 pr-8 pl-8 rounded-b-[0.5rem] font-bold transition duration-300">Expirence</Link>

            <Link href={'./contact'} className="hover:bg-primary_color hover:text-text_color pt-10 pb-10 pr-8 pl-8 rounded-b-[0.5rem] font-bold transition duration-300">Contact</Link>
        </nav>
    )
}