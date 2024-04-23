import Link from "next/link"

export default function NavBar(){
    return(
        <nav className="flex font-laila font-semibold text-[1.5rem]">
            <Link href={'./'} className="hover:bg-primary_color pt-16 pb-16 pr-8 pl-8 rounded-b-[0.5rem]">About me</Link>

            <Link href={'./expirence'} className="hover:bg-primary_color pt-16 pb-16 pr-8 pl-8 rounded-b-[0.5rem]">Expirence</Link>

            <Link href={''} className="hover:bg-primary_color pt-16 pb-16 pr-8 pl-8 rounded-b-[0.5rem]">Contact</Link>
        </nav>
    )
}