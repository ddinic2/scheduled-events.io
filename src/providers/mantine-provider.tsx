import { MantineProvider as MantineCoreProvider } from "@mantine/core";
import React from "react";

type MantineProvider = {
    children: React.ReactNode;
};

export const MantineProvider = ({ children }: MantineProvider) => {
    // if dark theme is needed at some point handle it here
    return (
        <MantineCoreProvider
            theme={{
                colors: {
                    "pink": [
                        "#F7D9F0",
                        "#F0C2E1",
                        "#EAA8D5",
                        "#E38FC9",
                        "#DD77BB",
                        "#D047A0",
                        "#C31686",
                        "#A4136A",
                        "#83104E",
                        "#610D32",
                    ],
                    "purple": [
                        "#D9D5F7",
                        "#C2BDF0",
                        "#A8A2E9",
                        "#8F87E3",
                        "#7771DD",
                        "#3D108B",
                        "#4640D0",
                        "#1510C4",
                        "#1310A3",
                        "#101082",
                    ],
                },
                primaryColor: "purple",
            }}
        >
            {children}
        </MantineCoreProvider>
    );
};
