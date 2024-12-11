import { MantineProvider } from "./mantine-provider";
import React, { useMemo } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ModalsProvider } from "./modal-provider";
import { Session } from "inspector/promises";
// import { InterceptorProvider } from "./interceptor-provider";
// import { Notifications } from "@mantine/notifications";
// import { SocketProvider } from "./socket-provider";

type ProvidersProps = {
  children: React.ReactNode;
  session: Session;
};

export const Providers = ({ children }: ProvidersProps) => {
  const queryClient = useMemo(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      }),
    [],
  );

  return (
    <MantineProvider>
      <QueryClientProvider client={queryClient}>
        <ModalsProvider>
          {/* <SessionProvider session={session}>
        <QueryClientProvider client={queryClient}>
          <ModalsProvider>
            <InterceptorProvider> */}
          {/* <PusherProvider> */}
          {children}

          {/* </PusherProvider> */}
          {/* </InterceptorProvider>
          </ModalsProvider>
        </QueryClientProvider>
      </SessionProvider> */}
        </ModalsProvider>
      </QueryClientProvider>
    </MantineProvider>
  );
};
