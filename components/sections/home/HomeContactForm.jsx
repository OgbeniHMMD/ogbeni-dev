import SectionContainer from "../../SectionContainer";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";

export default function HomeContactForm() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [response, setResponse] = useState({});

  const onSubmit = async (data) => {
    if (response.sending) return;

    setResponse({
      sending: true,
      message: "Sending your message. Please, wait.",
    });

    await axios
      .post("https://ogbeni.herokuapp.com/misc/contact", data)
      .then((res) => {
        reset();
        setResponse({
          success: true,
          message: res?.data?.message,
        });
      })
      .catch((e) => {
        setResponse({
          error: true,
          message:
            e?.response?.data?.message ||
            "An error occurred while sending your message, please check your internet connection and try again.",
        });
      })
      .finally(() => {
        setSending(false);
      });
  };

  return (
    <SectionContainer shade="white" padding="xl" id="contact">
      <div className="mx-auto max-w-screen-lg">
        <h1 className="font-medium text-center text-lg tracking-wide pb-8 uppercase">
          Get in touch
        </h1>

        {(response.success || response.error) && (
          <div className="border rounded mx-auto max-w-md border-l-4 border-dark-50 text-center mb-4 p-2 text-dark-50 md:p-4">
            {response.message}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="pb-4 lg:pb-8">
            <input
              {...register("fullName")}
              placeholder="Your Name"
              className="border rounded w-full p-4 "
            />
          </div>
          <section className="w-full md:flex md:space-x-4 lg:space-x-8">
            <div className="pb-4 md:w-1/2 lg:pb-8">
              <input
                {...register("email")}
                placeholder="E-mail"
                className="border rounded w-full p-4"
              />
            </div>
            <div className="pb-4 md:w-1/2 lg:pb-8">
              <input
                {...register("phone")}
                placeholder="Phone (optional)"
                className="border rounded w-full p-4"
              />
            </div>
          </section>
          <div className="pb-4">
            <textarea
              {...register("text", { required: true })}
              placeholder="Enter your message here..."
              className="border rounded w-full min-h-40 p-4"
            />

            {errors.text && (
              <div className="text-xs text-dark-50 italic">
                *Please, enter your message
              </div>
            )}
          </div>
          <div className="pb-4">
            <button
              type="submit"
              className="border rounded text-sm py-4 px-6 hover:bg-light-50"
              title="NOT IMPLEMENTED"
            >
              {response.sending ? "Sending Message..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </SectionContainer>
  );
}
