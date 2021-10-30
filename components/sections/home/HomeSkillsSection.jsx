import SectionContainer from "../../SectionContainer";

export default function HomeSkillsSection() {
  const tools = [
    {
      title: "React",
      icon: "/icons/react.svg",
      url: "https://reactjs.org",
    },
    {
      title: "Vue.js",
      icon: "/icons/vue.svg",
      url: "https://vuejs.org",
    },
    {
      title: "Nuxtjs",
      icon: "/icons/nuxt.svg",
      url: "https://nuxtjs.org",
    },
    {
      title: "NextJs",
      icon: "/icons/nextjs.svg",
      url: "https://nextjs.org",
    },
  ];

  return (
    <SectionContainer padding="lg" shade="white" id="skills">
      <h1 className="font-medium text-center text-lg tracking-wide pb-8 uppercase">
        Skills &amp; Tools
      </h1>
      <div className="flex flex-wrap space-x-8 space-y-4 justify-center items-end md:space-y-0">
        {tools.map((tool) => (
          <a href={tool.url} key={tool.title} target="_blank" rel="noreferrer">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={tool.title}
              src={tool.icon}
              className="h-16 w-auto"
              alt={tool.title}
            />
          </a>
        ))}
      </div>
    </SectionContainer>
  );
}
