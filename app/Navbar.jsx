import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
import {HiHome, HiUserGroup} from "react-icons/hi";
import Link from "next/link";


export default function App() {
    return (
        <Navbar className={"bg-slate-300 flex flex-col rounded-b-3xl"}>
            <NavbarBrand>
                <Link href={"/"}>
                    <HiHome className={"h-12 w-12"}></HiHome>
                </Link>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem isActive>
                    <Link href={"/clients"}>
                        <HiUserGroup className={"h-12 w-12"}> XXX</HiUserGroup>
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                </NavbarItem>
                <NavbarItem>

                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
