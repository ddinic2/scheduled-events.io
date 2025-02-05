import { Box, Flex } from "@mantine/core";
import Head from "next/head";
import React from "react";

type PageLayoutProps = {
    title: string;
    children?: React.ReactNode;
};

export const PageLayout = ({ title, children }: PageLayoutProps) => {

    return (
        <>
            <Head>
                <title>Scheduled events</title>
                <meta name="description" content="Scheduled events" />
                <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <meta charSet="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport" />
                <meta http-equiv="Content-Security-Policy" content="frame-ancestors *;" />
                <meta name="referrer" content="no-referrer-when-downgrade" />
            </Head>

            <Flex display="block" direction="column" h="100%" style={{ margin: '0', padding: '0' }}>
                {children}
            </Flex>
        </>
    );
};
