// import "@/styles/globals.css";

import { Providers } from "../providers";
import { AppShell } from "@mantine/core";
import type { AppProps } from "next/app";

import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import { useDisclosure } from "@mantine/hooks";
import Header from "../components/header/header";


// requireAuth is used to check if the page requires authentication
type AppPropsWithAuth = AppProps & {
  Component: {
    requireAuth?: boolean;
  };
};

// app shell has styles that work with Layout component
const App = ({ Component, pageProps }: AppPropsWithAuth) => {

  const [opened] = useDisclosure();
  // console.log('APP.tsx', Component.requireAuth)


  return (
    <Providers session={pageProps.session}>
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 0,
          breakpoint: 'sm',
          collapsed: { mobile: !opened },
        }}
        padding="md"
      >
        <AppShell.Header>
          {/* <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom="sm"
            size="sm"
          /> */}
          <Header />
        </AppShell.Header>

        {/* <AppShell.Navbar p="md">Navbar</AppShell.Navbar> */}

        <AppShell.Main><Component {...pageProps} /></AppShell.Main>
      </AppShell>


    </Providers>
  );
};

export default App;

