import Navbar from "@/components/Navbar";
import Presentation from "@/components/Presentation";
import Services from "@/components/Services";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Easy Company</title>
      </Head>
      <Navbar />
      <Presentation />
      <Services />
    </>
  )
}
