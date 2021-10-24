import ComingSoon from "../components/sections/ComingSoon";
import DefaultLayout from "../components/layouts/DefaultLayout";
import HomeContactForm from "../components/sections/home/HomeContactForm";

export default function Home() {
  return (
    <DefaultLayout title="We Are Coming Soon" meta={{ description: "xxx" }}>
      <ComingSoon />
      <HomeContactForm />
    </DefaultLayout>
  );
}
