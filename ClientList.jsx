import React, {useEffect, useState} from "react";
import {Button, Card, CardBody, Input, Popover, PopoverContent, PopoverTrigger} from "@nextui-org/react";
import {PiCactus} from "react-icons/pi";


const getClients = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/clients", {
            cache: "no-store"
        });
        if (!res.ok) {
            throw new Error("Failed to fetch Client list")
        }
        return res.json();
    } catch (error) {
        console.log("Error loading clients", error);
    }
};

export default function ClientList() {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        const fetchClients = async () => {
            const result = await getClients();
            setClients(result.clients);
        };

        fetchClients();
    }, []);

    return (
        <div className="flex flex-col gap-3">
            {clients.map((client, index) => (
                <div key={index}>
                    <Card>
                        <CardBody >
                            <h2 className={"text-large font-semibold leading-none text-default-600"}>Name: {client.name}</h2>
                            <p>Mobile: {client.mobile}</p>
                            <p>Address: {client.address}</p>
                            <p className={"text-medium font-semibold leading-none text-default-600"}>Serial: {client.serialNo}</p>
                            <div>
                                <Popover>
                                    <PopoverTrigger>
                                        <Button className={"w-full mt-5"}>Add Payment</Button>
                                    </PopoverTrigger>
                                    <PopoverContent className={"flex flex-row items-center gap-4"}>
                                        <Input className={"p-1 rounded-xl"} size={"sm"} placeholder={"Enter amount"}></Input>
                                        <div>
                                            <Button>Add</Button>
                                        </div>

                                    </PopoverContent>
                                </Popover>

                            </div>
                        </CardBody>
                    </Card>
                </div>
            ))}
        </div>
    );
}