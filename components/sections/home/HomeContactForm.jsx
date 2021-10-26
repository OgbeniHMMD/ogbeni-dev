import SectionContainer from "../../SectionContainer";

export default function HomeContactForm() {
  return (
    <SectionContainer shade="white" padding="xl">
      <div id="contact" className="max-w-screen-lg mx-auto">
        <h1 className="text-center text-lg font-medium uppercase tracking-wide pb-8">
          Get in touch
        </h1>
        <form>
          <div className="pb-4 lg:pb-8">
            <input
              placeholder="Your Name"
              className="w-full border rounded p-4 "
            />
          </div>
          <section className="w-full md:flex md:space-x-4 lg:space-x-8">
            <div className="md:w-1/2 pb-4 lg:pb-8">
              <input
                placeholder="E-mail"
                className="w-full border rounded p-4"
              />
            </div>
            <div className="md:w-1/2 pb-4 lg:pb-8">
              <input
                placeholder="Phone"
                className="w-full border rounded p-4"
              />
            </div>
          </section>
          <div className="pb-4">
            <textarea
              placeholder="Enter your message here..."
              className="w-full border rounded p-4 min-h-40"
            />
          </div>
          <div className="pb-4">
            <button
              className="border rounded text-sm hover:bg-light-50 cursor-not-allowed px-6 py-4"
              title="NOT IMPLEMENTED"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </SectionContainer>
  );
}
