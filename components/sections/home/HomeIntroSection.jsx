import SectionContainer from "../../SectionContainer";

export default function HomeIntroSection() {
  return (
    <SectionContainer
      padding="3xl"
      texture="https://www.transparenttextures.com/patterns/subtle-dots.png"
    >
      <div className="text-center">
        <h2 className="font-medium font-display tracking-loose pb-4 text-5xl">
          Hammed A. Olajide
        </h2>
        <div className="font-mono text-lg tracking-wider pb-2">
          Software Engineer
        </div>
        <div className="pb-8">Lagos, Nigeria </div>

        <div className="flex justify-center">
          <a
            href="#contact"
            className="bg-white border rounded-full border-light-900 p-2 animate-bounce hover:border-dark-900"
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
  );
}
