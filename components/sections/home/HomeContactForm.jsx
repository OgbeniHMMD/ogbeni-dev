import SectionContainer from "../../SectionContainer";

export default function HomeContactForm() {
  return (
    <SectionContainer shade="white" padding="xl" id="contact">
      <div className="mx-auto max-w-screen-lg">
        <h1 className="font-medium text-center text-lg tracking-wide pb-8 uppercase">
          Get in touch
        </h1>
        <form>
          <div className="pb-4 lg:pb-8">
            <input
              placeholder="Your Name"
              className="border rounded w-full p-4 "
            />
          </div>
          <section className="w-full md:flex md:space-x-4 lg:space-x-8">
            <div className="pb-4 md:w-1/2 lg:pb-8">
              <input
                placeholder="E-mail"
                className="border rounded w-full p-4"
              />
            </div>
            <div className="pb-4 md:w-1/2 lg:pb-8">
              <input
                placeholder="Phone"
                className="border rounded w-full p-4"
              />
            </div>
          </section>
          <div className="pb-4">
            <textarea
              placeholder="Enter your message here..."
              className="border rounded w-full min-h-40 p-4"
            />
          </div>
          <div className="pb-4">
            <button
              className="border rounded cursor-not-allowed text-sm py-4 px-6 hover:bg-light-50"
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
