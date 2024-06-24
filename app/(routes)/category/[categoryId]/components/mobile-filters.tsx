"use client";

import { useState } from "react";

import {Book, PublishingHouse, Language} from "@/types";
import Button from "@/components/ui/button";
import { Plus, X } from "lucide-react";
import { Dialog, DialogPanel } from "@headlessui/react";
import IconButton from "@/components/ui/icon-button";
import Filter from "./filter";

interface MobileFilterProps {
    books: Book[];
    publishingHouses: PublishingHouse[];
    languages: Language[];
};

const MobileFilter: React.FC<MobileFilterProps> = ({
    books,
    publishingHouses,
    languages
}) => {
    const [open, setOpen] = useState(false);
    const onOpen = () => setOpen(true);
    const onClose = () => setOpen(false);

    return (
        <>
            <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
                Filters
                <Plus size={20}/>
            </Button>
            <Dialog open={open} as="div" className="relative z-40 lg:hidden" onClose={onClose}>
                <div className="fixed inset-0 bg-black bg-opacity-25">
                    <div className="fixed inset-0 z-40 flex">
                        <DialogPanel className="relative ml-auto flex h-full w-full max-w-xs
                        flex-col woverflow-y-auto bg-white py-4 pb-6 shadow-xl">
                            <div className="flex items-center justify-end px-4">
                                <IconButton icon={<X size={15} />} onClick={onClose}/>
                            </div>
                            <div className="p-4">
                            <Filter
                                valueKey="bookId"
                                name="Books"
                                data={books}
                            />
                            <Filter
                                valueKey="publishingHouseId"
                                name="Publishing House"
                                data={publishingHouses}
                            />
                            <Filter
                                valueKey="languageId"
                                name="Language"
                                data={languages}
                            />
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    )
}

export default MobileFilter;