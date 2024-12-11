import axios from "../../../lib/axios";
// import { useMeStore } from "@/stores/me";
import { Center, Loader } from "@mantine/core";
// import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Routes } from "../../../routes";

type Props = {
  children: React.ReactElement;
};

/*
  add the requireAuth property to the page component
  to protect the page from unauthenticated users
  e.g.:
  Stores.requireAuth = true;
  export default Stores;
 */

export const ProtectedLayout = ({ children }: Props): JSX.Element => {
  const router = useRouter();
//   const { status: sessionStatus } = useSession();

//   const authorized = sessionStatus === "authenticated";
//   const unAuthorized = sessionStatus === "unauthenticated";
//   const loading = sessionStatus === "loading";

const authorized = true;
const unAuthorized = false;
const loading = false;

  // const {me} = useMeStore()
  // console.log('session status, ', authorized, unAuthorized, loading)
  // console.log('me in protected', me)
  // console.log('ROUTER in protected', router)

  useEffect(() => {
    // check if the session is loading or the router is not ready
    if (loading || !router.isReady) return;

    // if the user is not authorized, redirect to the login page
    // with a return url to the current page
    if (unAuthorized) {
      console.log("not authorized");
      router.push({
        pathname: "/signin",
        query: { returnUrl: router.asPath },
      });
    }
    // continue when Andrej approve
    // if(me && (me.role === "ROLE_OPERATOR" || me.role === "ROLE_COURIER_MANAGER")){

    // }
  }, [loading, unAuthorized, router]);

  // if the user refreshed the page or somehow navigated to the protected page
  if (loading) {
    return (
      <Center h="100vh">
        <Loader />
      </Center>
    );
  }

  // if the user is authorized, render the page
  // otherwise, render nothing while the router redirects him to the login page
  return authorized ? <div>{children}</div> : <></>;
};
