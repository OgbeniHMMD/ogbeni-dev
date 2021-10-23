import Head from "next/head";
import ComingSoon from "../components/ComingSoon";
import DefaultLayout from "../components/layouts/DefaultLayout";

export default function Home() {
  return (
    <DefaultLayout title="We Are Coming Soon" meta={{ description: "xxx" }}>
      <ComingSoon />
    </DefaultLayout>
  );
}
