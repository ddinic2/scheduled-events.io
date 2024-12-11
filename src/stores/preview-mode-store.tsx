import { create } from "zustand";

type PrviewModelModal = {
    isOpen: boolean;
    mode: string;
    setMode: (m: string) => void;
    toggle: () => void;
    open: () => void;
    close: () => void;
};

export const usePreviewModalStore = create<PrviewModelModal>((set) => ({
    isOpen: false,
    mode: 'DAY',
    setMode: (m) => set(() => ({ mode: m })),
    toggle: () => set((state) => ({ isOpen: !state.isOpen })),
    open: () => set(() => ({ isOpen: true })),
    close: () => set(() => ({ isOpen: false })),
}));


