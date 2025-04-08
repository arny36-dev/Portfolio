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
          <h2 className="h2">Zaujal som ťa ?</h2>
          <p className="p">Kontaktuj ma pomocou e-mailu dolu!</p>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Meno + Priezvisko"
                {...register("user_name")}
                className="basic-input"
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
                className="basic-input"
              />
              {errors.user_email && (
                <p className="text-red-500 text-sm mt-1">{errors.user_email.message}</p>
              )}
            </div>

            <div>
              <textarea
                placeholder="Správa ..."
                rows={4}
                {...register("message")}
                className="basic-input"
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
              {isSubmitting ? "Odosielam..." : "Odoslať správu"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
