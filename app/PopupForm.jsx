import { Button, Input, Popover, PopoverContent, PopoverTrigger, useDisclosure } from "@nextui-org/react";
import React from "react";

export default function PopupForm() {
    const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

    return (
        <>
            <Popover
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="bottom"
                showArrow
                offset={50}
                onClose={onClose} // Use onClose directly for modal-like behavior
            >
                <PopoverTrigger>
                    <Button onPress={onOpen} color="primary">Popup Form</Button>
                </PopoverTrigger>
                <PopoverContent className="w-[400px]">
                    {/* No need for nested onClose function */}
                    <div className="px-1 py-5 w-full">
                        <p className="text-large font-bold text-foreground text-center">
                            Client Details
                        </p>
                        <div className="mt-5 flex flex-col space-y-5 w-full">
                            <Input
                                name="name"
                                label="Name"
                                placeholder="Enter Client's Name:"
                                variant="bordered"
                            />
                            <Input
                                name="mobile"
                                label="Mobile"
                                placeholder="Client's Mobile:"
                                type="number"
                                variant="bordered"
                            />
                            <Input
                                name="address"
                                label="Address"
                                placeholder="Client's Address:"
                                type="text"
                                variant="bordered"
                            />
                            <Input
                                name="serialNo"
                                label="Serial No:"
                                placeholder="Client's Serial:"
                                type="number"
                                variant="bordered"
                            />
                        </div>
                    </div>
                    <div className={"p-3"}>
                        <Button onClick={onClose} color="primary">
                            Create Client
                        </Button>
                    </div>
                </PopoverContent>
            </Popover>
        </>
    );
}
