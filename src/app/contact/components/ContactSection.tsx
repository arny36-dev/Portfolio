"use client";
import { useEmailSubmit } from "./../hooks/useEmailSubmit";
import { Toaster } from "react-hot-toast";

// Pomocná komponenta pre input
const InputField = ({ register, name, type, placeholder, error }: any) => (
  <div>
    <input
      type={type}
      placeholder={placeholder}
      {...register(name)}
      className="basic-input"
    />
    {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
  </div>
);

// Pomocná komponenta pre textarea
const TextareaField = ({ register, name, placeholder, rows, error }: any) => (
  <div>
    <textarea
      placeholder={placeholder}
      rows={rows}
      {...register(name)}
      className="basic-input"
    />
    {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
  </div>
);

export default function ContactSection() {
  const { formRef, register, handleSubmit, errors, isSubmitting } = useEmailSubmit();

  return (
    <section className="w-full px-6 py-12 relative">
      <Toaster position="top-center" reverseOrder={false} />
      
      <div className="max-w-6xl mx-auto flex justify-center flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <h2 className="h2">Zaujal som ťa ?</h2>
          <p className="p mb-6">Kontaktuj ma pomocou e-mailu dolu!</p>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <InputField
              register={register}
              name="user_name"
              type="text"
              placeholder="Meno + Priezvisko"
              error={errors.user_name}
            />

            <InputField
              register={register}
              name="user_email"
              type="email"
              placeholder="Email"
              error={errors.user_email}
            />

            <TextareaField
              register={register}
              name="message"
              rows={4}
              placeholder="Správa ..."
              error={errors.message}
            />

            <button
              type="submit"
              className="btn-gradient w-full md:w-auto"
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
