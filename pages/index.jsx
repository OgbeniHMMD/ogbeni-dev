import ComingSoon from "../components/sections/ComingSoon";
import DefaultLayout from "../components/layouts/DefaultLayout";
import HomeContactForm from "../components/sections/home/HomeContactForm";
import SectionContainer from "../components/SectionContainer";
import TopSocialMediaLink from "../components/_partials/TopSocialMediaLink";

export default function Home() {
  return (
    <DefaultLayout title="We Are Coming Soon" meta={{ description: "xxx" }}>
      <a
        title="Github"
        href="https://github.com/OgbeniHMMD"
        className="bg-white border-b py-4 px-20 transform -right-16 z-50 rotate-45 fixed group hover:border-dark-900"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto h-8 animate-pulse w-8"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
        </svg>
      </a>

      <SectionContainer shade="white" padding="3xl">
        <div className="text-center">
          <h2 className="font-medium tracking-loose pb-2 text-4xl">
            Hammed A. Olajide
          </h2>
          <div className="font-mono text-lg tracking-wider pb-2">
            Software Engineer
          </div>
          <div className="text-sm pb-8">
            Reactjs &mdash; Vuejs &mdash; Expressjs
          </div>

          <div className="flex justify-center">
            <a
              href="#contact"
              className="border rounded-full border-light-900 p-2 animate-bounce hover:border-dark-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer padding="xl">
        <div className="text-center">{"{Projects here. #WIP}"}</div>
      </SectionContainer>

      {/* <ComingSoon /> */}
      <HomeContactForm />
    </DefaultLayout>
  );
}
