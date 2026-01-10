"use client";

import { useState } from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, message });
  };

  return (
    <>
      <Header title="Contact" />

      <div className="w-full px-4 mt-8 mb-16 md:flex md:justify-center">
        <form
          onSubmit={handleSubmit}
          className="
            w-full
            max-w-[340px]
            md:max-w-[480px]
            space-y-6
          "
        >
          {/* Name */}
          <div className="flex flex-col space-y-1">
            <label className="text-sm font-medium">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="
                rounded-md
                border
                px-3
                py-2
                text-sm
                focus:outline-none
                focus:ring-2
                focus:ring-[color:var(--color-text-primary)]
              "
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col space-y-1">
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="
                rounded-md
                border
                px-3
                py-2
                text-sm
                focus:outline-none
                focus:ring-2
                focus:ring-[color:var(--color-text-primary)]
              "
              required
            />
          </div>

          {/* Message */}
          <div className="flex flex-col space-y-1">
            <label className="text-sm font-medium">Message</label>
            <textarea
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="
                rounded-md
                border
                px-3
                py-2
                text-sm
                resize-none
                focus:outline-none
                focus:ring-2
                focus:ring-[color:var(--color-text-primary)]
              "
              required
            />
          </div>

          {/* Submit */}
          <div className="pt-2 text-center">
            <button
              type="submit"
              className="
                inline-block
                rounded-full
                bg-[color:var(--color-text-primary)]
                px-3
                py-2
                text-sm
                font-medium
                text-white
                hover:opacity-90
                transition
              "
            >
              Send
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
}
