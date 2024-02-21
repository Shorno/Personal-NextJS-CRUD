"use client"
import ClientList from "/ClientList";
import React, {useState} from "react";

function ClientListPage() {
    const [clients, setClients] = useState([]);
    return (
        <>
            <div className={"items-center flex flex-col p-10 mt-20"}>
                <h1>This is client list page</h1>
                <ClientList clients={clients}/>
            </div>


        </>
    )
}

export default ClientListPage;