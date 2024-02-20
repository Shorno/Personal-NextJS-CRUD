import React, {useState} from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    Input,
} from "@nextui-org/react";
import {useRouter} from "next/navigation";

export default function ClientForm({setClients, clients}) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [client, setClient] = useState({name: "", mobile: "", address: "", serialNo: ""});
    const router = useRouter();

    const handleChange = (e) => {
        setClient({...client, [e.target.name]: e.target.value});
    };

    const handleCreate = async () => {
        setClients([...clients, client]);
        setClient({name: "", mobile: "", address: "", serialNo: ""});

        try {
            const res = await fetch("http://localhost:3000/api/clients", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    name: client.name,
                    mobile: client.mobile,
                    address: client.address,
                    serialNo: client.serialNo
                })
            });
            if (res.ok) {
                router.push("/client-list")
            } else {
                throw new Error("Failed to create new Client")
            }
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <>
            <Button onPress={onOpen} color="primary">Create New Client</Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top-center"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Client Info</ModalHeader>
                            <ModalBody>
                                <Input
                                    name="name"
                                    label="Name"
                                    placeholder="Enter Client's Name:"
                                    variant="bordered"
                                    value={client.name}
                                    onChange={handleChange}
                                />
                                <Input
                                    name="mobile"
                                    label="Mobile"
                                    placeholder="Client's Mobile:"
                                    type="number"
                                    variant="bordered"
                                    value={client.mobile}
                                    onChange={handleChange}
                                />
                                <Input
                                    name="address"
                                    label="Address"
                                    placeholder="Client's Address:"
                                    type="text"
                                    variant="bordered"
                                    value={client.address}
                                    onChange={handleChange}
                                />
                                <Input
                                    name="serialNo"
                                    label="Serial No:"
                                    placeholder="Client's Serial:"
                                    type="number"
                                    variant="bordered"
                                    value={client.serialNo}
                                    onChange={handleChange}
                                />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="flat" onPress={onClose}>
                                    Cancel
                                </Button>
                                <Button color="primary" onClick={handleCreate} onPress={onClose}>
                                    Create
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

