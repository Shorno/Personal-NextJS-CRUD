"use client"

import {NextUIProvider} from '@nextui-org/react'
import React from "react";
import {ThemeProvider} from "next-themes";
import MyNavbar from "./Navbar";


export function Providers({children}: { children: React.ReactNode }) {
    return (
        <NextUIProvider>
            <ThemeProvider attribute={"class"} defaultTheme={"light"}>
                <MyNavbar/>
                {children}
            </ThemeProvider>
        </NextUIProvider>
    )
}