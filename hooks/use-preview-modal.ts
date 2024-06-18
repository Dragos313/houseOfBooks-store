import {create} from "zustand";
import { Edition } from "@/types";

interface PreviewModalStore {
    isOpen: boolean;
    data?: Edition;
    onOpen: (data: Edition) => void;
    onClose: () => void;
};

const usePreviewModal = create<PreviewModalStore>((set) => ({
    isOpen: false,
    data: undefined,
    onOpen: (data: Edition) => set({data, isOpen: true}),
    onClose: () => set({isOpen: false})
}));

export default usePreviewModal;