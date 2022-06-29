import Head from "next/head"
import { FC, ReactNode } from 'react';
import { Navbar } from '../ui/Navbar';


interface Props {
    children: ReactNode, 
    title?: string
}


export const MainLayout:FC<Props> = ({children, title}) => {
    return (
        <>
            <Head>
                <title>{title ? title : 'PokemonApp' }</title>
                <meta name="author" content="Alejandro Widomlanski"></meta>
                <meta name="description" content="Información sobre el pokemon"></meta>
                <meta name="keywords" content="Pokemon, pokedex, Picachu "></meta>
            </Head>

            <Navbar/>
            
            <main style={{
                padding: '0px 20px'
            }}>
                {children}
            </main>
            
        </>
    )
}
