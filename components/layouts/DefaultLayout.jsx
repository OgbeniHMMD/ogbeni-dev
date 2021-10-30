import Head from "next/head";
import FooterCopyRight from "../_partials/FooterCopyright";
import NavigationBar from "../_partials/NavigationBar";
import TopSocialMediaLink from "../_partials/TopSocialMediaLink";

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

      <main className="flex flex-col font-body min-h-screen bg-light-50 justify-between">
        {/* <TopSocialMediaLink />
        <NavigationBar /> */}

        <main className="flex-grow flex flex-col h-full">{props.children}</main>
        <FooterCopyRight />
      </main>
    </>
  );
}
