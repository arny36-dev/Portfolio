"use client";
import { useEmailSubmit } from "./../hooks/useEmailSubmit";
import { Toaster } from "react-hot-toast";

export default function ContactSection() {
  const { formRef, register, handleSubmit, errors, isSubmitting } = useEmailSubmit();

  return (
    <section className="w-full px-6 py-12 relative">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="max-w-6xl mx-auto flex justify-center flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <h2 className="h2">Get in touch</h2>
          <p className="p">We are here for you! How can we help?</p>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Name"
                {...register("user_name")}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
              {errors.user_name && (
                <p className="text-red-500 text-sm mt-1">{errors.user_name.message}</p>
              )}
            </div>

            <div>
              <input
                type="email"
                placeholder="Email"
                {...register("user_email")}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
              {errors.user_email && (
                <p className="text-red-500 text-sm mt-1">{errors.user_email.message}</p>
              )}
            </div>

            <div>
              <textarea
                placeholder="Message"
                rows={4}
                {...register("message")}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="btn-gradient"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Odosielam..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
