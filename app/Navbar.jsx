import React from "react";
import {
    Navbar,
    NavbarContent,
    NavbarItem,
    Avatar,
} from "@nextui-org/react";
import Link from 'next/link';


export default function MyNavbar() {
    return (
        <Navbar>
            <NavbarContent className=" gap-20" justify="center">
                <NavbarItem isActive>
                    <Link href="/" aria-current="page" color="secondary">
                        Dashboard
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem>
                    <Link href="/client-list" aria-current="page" color="secondary">
                        Client List
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent as="div" justify="end">
                <Avatar/>
            </NavbarContent>

        </Navbar>
    );
}
