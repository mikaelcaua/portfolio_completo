import NavBar from "../navbar";
import Image from "next/image";
import Link from "next/link";
export default function Header(){
    return(
        <header className="bg-bg_color text-text_color flex flex-row items-center justify-between pr-[8%] pl-[8%] ">
                <Link href={"./"}>
                    <Image width={80} height={45} alt={"logo mikael"} src={'/home/logo_mikael.png'}></Image>
                </Link>
                <NavBar/>
        </header>
    )
}