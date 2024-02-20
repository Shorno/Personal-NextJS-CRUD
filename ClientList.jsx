import React, {useState} from "react";
import {Card, CardBody} from "@nextui-org/react";

const getClients = async () =>{
    try {
        const res = await fetch("http://localhost:3000/api/clients",{
            cache : "no-store"
        });
        if (!res.ok){
            throw new Error("Failed to fetch Client list")
        }
        return res.json();
    }catch (error){
        console.log("Error loading clients", error);
    }
};

export default function ClientList() {
    const [clients, setClients] = useState([]);

    React.useEffect(() => {
        const fetchClients = async () => {
            const result = await getClients();
            setClients(result.clients);
        };

        fetchClients();
    }, []);

    return (
        <div className="flex flex-col gap-5">
            {clients.map((client, index) => (
                <div key={index}>
                    <Card>
                        <CardBody>
                            <h2 className={"text-large font-semibold leading-none text-default-600"}>Name: {client.name}</h2>
                            <p>Mobile: {client.mobile}</p>
                            <p>Address: {client.address}</p>
                            <p className={"text-medium font-semibold leading-none text-default-600"}>Serial: {client.serialNo}</p>
                        </CardBody>
                    </Card>
                </div>
            ))}
        </div>
    );
}