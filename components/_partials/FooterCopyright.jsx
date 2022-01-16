import SectionContainer from "../SectionContainer";

export default function FooterCopyRight() {
  return (
    <SectionContainer shade="light" padding="md">
      <section className="text-center text-dark-50">
        <div className="tracking-tracking-wider pb-2">
          Copyright &copy; 2021 {" - "}
          <a
            href="https://twitter.com/ogbenihmmd"
            className="font-medium underline-dark-50 hover:underline"
          >
            OgbeniHMMD
          </a>
        </div>
        <div className="font-mono text-sm">
          Proudly Nigerian &#127475;&#127468;
        </div>
      </section>
    </SectionContainer>
  );
}
