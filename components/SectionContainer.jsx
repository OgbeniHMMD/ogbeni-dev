export default function SectionContainer(props) {
  const paddings = {
    none: "p-0",
    xs: "px-2 py-1 lg:py-2",
    sm: "px-2 py-3 lg:py-6",
    md: "px-2 py-6 lg:py-12",
    lg: "px-2 py-12 lg:py-20",
    xl: "px-2 py-20 lg:py-36",
    "2xl": "px-2 py-28 lg:py-48",
  };

  const shades = {
    none: "bg-transparent text-dark-200",
    white: "bg-white text-dark-200",
    light: "bg-light-50 text-dark-200",
    dark: "bg-dark-50 text-white",
  };

  const padding = paddings[props.padding || "md"];
  const shade = shades[props.shade || "light"];

  return (
    <section className={`text-sm border-t ${shade}`}>
      <div className={`container mx-auto px-2 ${padding}`}>
        {props.children}
      </div>
    </section>
  );
}
