import SectionContainer from "./SectionContainer";

export default function NavigationBar() {
  return (
    <>
      <nav className="container mx-auto text-xs">
        <section className="w-full- flex justify-end items-center space-x-4 px-1">
          <a>Blog</a>
          <a className="border-l border-r p-2">Contact</a>
          <a>Twiter</a>
        </section>
      </nav>

      <SectionContainer size="lg">
        <section className="w-full flex justify-between items-center space-x-2">
          <div>OgbeniHMMD</div>

          <div className="flex space-x-4">
            <div>Link 1</div>
            <div>Link 2</div>
            <div>Link 3</div>
          </div>
        </section>
      </SectionContainer>
    </>
  );
}
