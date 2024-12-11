import moment from "moment";
import { create } from "zustand";

type DatesFromStoreModel = {
    from: Date;
    to: Date;
    setFrom: (m: Date) => void;
    setTo: (m: Date) => void;
};

export const useDatesFromStore = create<DatesFromStoreModel>((set) => ({
    from: moment().startOf('day').toDate(),
    to: moment().endOf('day').toDate(),
    setFrom: (d) => set(() => ({ from: d })),
    setTo: (d) => set(() => ({ to: d })),
}));



