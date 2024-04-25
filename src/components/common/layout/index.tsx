import { ReactElement } from "react";
import Header from "../header";


interface LayoutProps{
    children:ReactElement;
}

export default function Layout({children}:LayoutProps){
    return(
        <>
            <Header/>
            {children}
        </>
    )
}