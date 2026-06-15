import React, { useState, useEffect } from "react";
import moon from '../assets/halfMoon.jpg'
const userIsMobile = (query = '(max-width: 639px)') => {
  const [isMobile, setIsMobile] = React.useState(
    typeof window !== 'undefined' && window.matchMedia(query).matches
  );
  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia(query);
    const handleChange = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    setIsMobile(mediaQuery.matches);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [query]);
  return isMobile;
}
const Page5 = () => {
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const response = await fetch("https://formspree.io/f/movwpjnn", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      form.reset();
      setSuccess(true);
    }
  };
  const isMobile = userIsMobile();
  return (
    <div className="p-2 md:p-20" id="contact">
      <div className="rounded-4xl flex p-10 bg-cover text-white">
        <img src={moon} alt="" className="w-[50%] hidden md:block z-20" />
        <div className="max-w-2xl mx-auto bg-cover px-4 bg-bottom py-8 "
          style={{
            backgroundImage: isMobile ? `url(${moon})` : "none",
          }}
        >
          <h2 className="text-[4vw] font-[anzo] mb-6 text-center">
            Get In Touch
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name*"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email*"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <input
              type="tel"
              name="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject*"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            />

            {/* Anti-spam honeypot field */}
            <input type="text" name="_gotcha" className="hidden" />

            <textarea
              name="msg"
              placeholder="Your Message*"
              rows="4"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-pink-400"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-lg transition"
            >
              Send Message
            </button>
          </form>

          {success && (
            <div className="mt-4 text-green-600 font-medium text-center">
              ✅ Message sent successfully!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
  export default Page5;
