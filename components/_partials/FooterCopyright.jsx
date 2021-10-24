import SectionContainer from "../SectionContainer";

export default function FooterCopyRight() {
  return (
    <SectionContainer shade="light" padding="md">
      <section className="text-dark-50 text-center">
        <div className="tracking-tracking-wider pb-2">
          Copyright &copy; 2021 -
          <span className="font-medium"> OgbeniHMMD.</span>
        </div>
        <div className="text-sm font-mono">
          Proudly Nigerian &#127475;&#127468;
        </div>
      </section>
    </SectionContainer>
  );
}
