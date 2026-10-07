import React, { useState } from "react";
import Button from "../components/Button";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle Netlify form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    setSending(true);
    setError("");

    const form = e.target;

    // Get all form fields
    const formDataToSend = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formDataToSend).toString(),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      // Success
      setSubmitted(true);

      // Clear form
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Netlify form error:", error);

      setError(
        "Something went wrong while sending your message. Please try again."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="min-h-screen bg-[#09090B] text-[#A1A1AA] pt-16">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-20">

        {/* ================= HEADING ================= */}

        <div className="text-center mb-14">
          <p className="text-[#22C55E] font-semibold tracking-[0.2em] text-sm uppercase">
            CONTACT
          </p>

          <h2 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            Let's connect.
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-[#A1A1AA] text-lg">
            Have a project, opportunity, or just want to say hello?
            I'd love to hear from you.
          </p>
        </div>

        {/* ================= CONTACT LAYOUT ================= */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* ================= CONTACT INFORMATION ================= */}

          <div className="rounded-2xl border border-[#27272A] bg-[#18181B] p-8">

            <h3 className="text-2xl font-bold text-white">
              Get in touch
            </h3>

            <p className="mt-3 text-[#A1A1AA] leading-relaxed">
              I'm always open to discussing new opportunities,
              interesting projects, collaborations, or anything
              related to web development and technology.
            </p>

            {/* Email */}

            <div className="mt-8">
              <p className="text-sm text-[#71717A]">
                Email
              </p>

              <a
                href="mailto:hardikchadha10@gmail.com"
                className="mt-1 inline-block text-[#22C55E] hover:text-[#4ADE80] transition"
              >
                hardikchadha10@gmail.com
              </a>
            </div>

            {/* Location */}

            <div className="mt-6">
              <p className="text-sm text-[#71717A]">
                Location
              </p>

              <p className="mt-1 text-[#F4F4F5]">
                Dehradun, Uttarakhand, India
              </p>
            </div>

            {/* Open To */}

            <div className="mt-6">
              <p className="text-sm text-[#71717A]">
                Open to
              </p>

              <p className="mt-1 text-[#F4F4F5]">
                Frontend Development · React · Web Development
              </p>
            </div>

            {/* WhatsApp */}

            <div className="mt-10">
              <a
                href="https://wa.me/916398508563"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#22C55E] text-[#09090B] font-semibold hover:bg-[#4ADE80] transition active:scale-95"
              >
                <FaWhatsapp size={24} className="mr-2 text-green-300" />
                Chat on WhatsApp
              </a>
            </div>

          </div>

          {/* ================= CONTACT FORM ================= */}

          <div className="rounded-2xl border border-[#27272A] bg-[#18181B] p-8">

            <h3 className="text-2xl font-bold text-white">
              Send me a message
            </h3>

            <p className="mt-2 text-[#A1A1AA]">
              Fill out the form and I'll get back to you.
            </p>

            {/* ================= SUCCESS MESSAGE ================= */}

            {submitted ? (

              <div className="mt-8 min-h-[350px] flex flex-col items-center justify-center text-center">

                <div className="w-16 h-16 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/30 flex items-center justify-center">
                  <span className="text-3xl text-[#22C55E]">
                    ✓
                  </span>
                </div>

                <h4 className="mt-5 text-2xl font-bold text-white">
                  Message Sent!
                </h4>

                <p className="mt-3 text-[#A1A1AA] max-w-md">
                  Thanks for reaching out. I've received your message
                  and will get back to you soon.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setError("");
                  }}
                  className="mt-6 text-[#22C55E] hover:text-[#4ADE80] transition cursor-pointer"
                >
                  Send another message
                </button>

              </div>

            ) : (

              /* ================= FORM ================= */

              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="mt-8 space-y-5"
              >

                {/* Required by Netlify */}

                <input
                  type="hidden"
                  name="form-name"
                  value="contact"
                />

                {/* Honeypot spam protection */}

                <p className="hidden">
                  <label>
                    Don't fill this out if you're human:

                    <input
                      name="bot-field"
                      tabIndex="-1"
                      autoComplete="off"
                    />
                  </label>
                </p>

                {/* ================= NAME ================= */}

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#D4D4D8] mb-2"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#09090B] border border-[#27272A] text-[#F4F4F5] placeholder-[#71717A] outline-none focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E] transition"
                  />
                </div>

                {/* ================= EMAIL ================= */}

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#D4D4D8] mb-2"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#09090B] border border-[#27272A] text-[#F4F4F5] placeholder-[#71717A] outline-none focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E] transition"
                  />
                </div>

                {/* ================= MESSAGE ================= */}

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#D4D4D8] mb-2"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    rows="6"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#09090B] border border-[#27272A] text-[#F4F4F5] placeholder-[#71717A] outline-none resize-none focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E] transition"
                  />
                </div>

                {/* ================= ERROR ================= */}

                {error && (
                  <p className="text-sm text-red-400 text-center">
                    {error}
                  </p>
                )}

                {/* ================= SUBMIT BUTTON ================= */}

                <Button
                  type="submit"
                  className="w-full"
                >
                  {sending ? "Sending..." : "Send Message"}
                </Button>

              </form>
            )}

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;