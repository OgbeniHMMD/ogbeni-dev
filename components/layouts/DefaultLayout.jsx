import Head from "next/head";
import FooterCopyRight from "../_partials/FooterCopyright";
import NavigationBar from "../_partials/NavigationBar";

export default function DefaultLayout(props) {
  return (
    <>
      <Head>
        <title>{`${props.title || "Untitled"} - Ogbeni.com.ng`}</title>
        <meta
          name="description"
          content={props.meta.description || "We are coming soon."}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen flex flex-col justify-between bg-light-50">
        <NavigationBar />

        <main className="flex-grow h-full flex flex-col  py-4">
          {props.children}
        </main>

        <FooterCopyRight />
      </main>
    </>
  );
}
