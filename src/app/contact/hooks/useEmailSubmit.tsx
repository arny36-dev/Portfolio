"use client";

import { useRef } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-hot-toast";

const ContactSchema = z.object({
  user_name: z.string().min(2, "Meno je povinné"),
  user_email: z.string().email("Neplatný email"),
  message: z.string().min(5, "Správa musí mať aspoň 5 znakov"),
});

type ContactFormInputs = z.infer<typeof ContactSchema>;

export function useEmailSubmit() {
  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(ContactSchema),
  });

  const onSubmit = async (data: ContactFormInputs) => {
    if (!formRef.current) return;

    try {
      await emailjs.sendForm(
        "service_o5db5oa",
        "template_jnebamv",
        formRef.current,
        "kyrCn2xD_cuyh5mJO"
      );
      toast.success("Správa bola úspešne odoslaná ✉️");
      reset();
    } catch (error) {
      console.error("Chyba pri odosielaní:", error);
      toast.error("Nepodarilo sa odoslať správu ❌");
    }
  };

  return {
    formRef,
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isSubmitting,
  };
}
