import React from "react";
import { ModalsProvider as MantineModalsProvider } from "@mantine/modals";
import { PreviewModeModal } from "@/components/modals/previw-mode-modal/previw-mode-modal";



type ModalsProviderProps = {
    children: React.ReactNode;
};

// TODO: Add types to modals and move them to props of MantineModalsProvider
export const ModalsProvider = ({ children }: ModalsProviderProps) => {
    return (
        <>
            <MantineModalsProvider>
                {children}
                <PreviewModeModal />
            </MantineModalsProvider>
        </>
    );
};
