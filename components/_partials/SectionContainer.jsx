export default function SectionContainer(props) {
  const paddings = {
    none: "p-0",
    xs: "p-1",
    sm: "p-2",
    md: "p-4",
    lg: "p-6",
    xl: "p-8",
    "2xl": "p-12",
  };
  let classes = paddings[props.padding || "md"];

  return (
    <section className="container mx-auto p-1">
      <div
        className={`bg-white text-sm text-dark-200 border rounded ${classes}`}
      >
        {props.children}
      </div>
    </section>
  );
}
