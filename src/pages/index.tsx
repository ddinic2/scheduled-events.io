import Head from "next/head";
// import localFont from "next/font/local";
// import styles from "@/styles/Home.module.css";
import { PageLayout } from "../components/layouts/page-layout";
import { HomePage } from "../components/layouts/home/home-page";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export default function Home() {
  return (

    <PageLayout title="app.home.title">
      <Head>
        <title>Scheduled events</title>
        <meta name="description" content="Scheduled events" />
        <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* <meta http-equiv="Content-Security-Policy" content="frame-ancestors *;" />
        <meta name="referrer" content="no-referrer-when-downgrade" /> */}

        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport" />
      </Head>
      <HomePage />
    </PageLayout>
  );
}
