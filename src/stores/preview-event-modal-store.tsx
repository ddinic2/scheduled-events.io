import { create } from "zustand";

type PrviewEventModal = {
    isOpen: boolean;
    event: any;
    setEvent: (m: any) => void;
    toggle: () => void;
    open: () => void;
    close: () => void;
};

export const usePreviewEventModalStore = create<PrviewEventModal>((set) => ({
    isOpen: false,
    event: null,
    setEvent: (m) => set(() => ({ event: m })),
    toggle: () => set((state) => ({ isOpen: !state.isOpen })),
    open: () => set(() => ({ isOpen: true })),
    close: () => set(() => ({ isOpen: false })),
}));


