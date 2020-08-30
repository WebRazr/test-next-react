import React from 'react'
import Link from "next/link"
import styled from 'styled-components';

const Topmenu = styled.div`
    background: black;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-around;
`
const LinkMenu = styled.a`
     font-size: 2em;
     cursor: pointer;
     color: white;
     line-height: 90px;
     
`

export default function MainLayout({children}){
    return (
        <div>
            <Topmenu>
                <Link href={'/'}><LinkMenu>main</LinkMenu></Link>
                <Link href={'/posts/new'}><LinkMenu>create new task</LinkMenu></Link>

            </Topmenu>
            <div>{children}</div>

        </div>
    )
}