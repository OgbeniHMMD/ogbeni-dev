import Head from "next/head";
import DefaultLayout from "../components/layouts/DefaultLayout";
import HomeContactForm from "../components/sections/home/HomeContactForm";
import StickyGithubIcon from "../components/_partials/StickyGithubIcon";
import HomeIntroSection from "../components/sections/home/HomeIntroSection";
import HomeSkillsSection from "../components/sections/home/HomeSkillsSection";
import HomeProjectSection from "../components/sections/home/HomeProjectSection";

export default function Home() {
  return (
    <DefaultLayout title="We Are Coming Soon" meta={{ description: "xxx" }}>
      <Head>
        <title>Hammed A. Olajide - Ogbeni.com.ng</title>
      </Head>
      <StickyGithubIcon />
      <HomeIntroSection />
      <HomeSkillsSection />
      {/* <HomeProjectSection /> */}
      <HomeContactForm />
    </DefaultLayout>
  );
}
