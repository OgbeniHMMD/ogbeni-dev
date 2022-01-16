import SectionContainer from "../../SectionContainer";

export default function HomeSkillsSection() {
  const tools = [
    {
      title: "React",
      icon: "/icons/react.svg",
      url: "https://reactjs.org",
    },
    {
      title: "Vue",
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
    {
      title: "Expo",
      icon: "/icons/expo.svg",
      url: "https://expo.dev",
    },
    {
      title: "TailwindCSS",
      icon: "/icons/tailwindcss.svg",
      url: "https://tailwindcss.com",
    },
    {
      title: "Figma",
      icon: "/icons/figma.svg",
      url: "https://figma.com",
    },
  ];

  return (
    <SectionContainer padding="lg" shade="white" id="skills">
      <h1 className="font-medium text-center text-lg tracking-wide pb-8 uppercase lg:pb-16">
        Skills &amp; Tools
      </h1>
      <div className="flex flex-wrap gap-8 justify-center items-end md:space-y-0">
        {tools.map((tool) => (
          <a
            href={tool.url}
            key={tool.title}
            title={tool.title}
            target="_blank"
            rel="noreferrer"
            className="p-2 group"
          >
            <img
              key={tool.title}
              src={tool.icon}
              className="mx-auto h-16 w-auto transform z-10 duration-200 group-hover:scale-110"
              alt={tool.title}
            />
          </a>
        ))}
      </div>
    </SectionContainer>
  );
}
