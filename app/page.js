"use client"
import React, {useState} from "react";
import ClientForm from "/ClientForm";
import PopupForm from "/app/PopupForm";


export default function Home() {

    const [clients, setClients] = useState([]);

    return (
        <>
            <div className={"items-center flex flex-col p-10 mt-20"}>
                <div className={"p-10"}>
                    <ClientForm setClients={setClients} clients={clients}/>
                </div>
                <PopupForm></PopupForm>
            </div>

        </>
    );
}