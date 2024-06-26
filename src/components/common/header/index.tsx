import NavBar from "../navbar";
import Image from "next/image";
import Link from "next/link";
export default function Header(){
    return(
        <header className="bg-bg_color text-text_color flex flex-row items-center justify-center md:justify-between md:pr-[8%] md:pl-[8%]">
                <Link href={"./"} className="hidden md:block">
                    <Image width={80} height={45} alt={"logo mikael"} src={'/home/logo_mikael.png'} unoptimized></Image>
                </Link>
                <NavBar/>
        </header>
    )
}