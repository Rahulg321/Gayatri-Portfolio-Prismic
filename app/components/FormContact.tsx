"use client";

import { useForm, SubmitHandler, FieldValues } from "react-hook-form";

import React from "react";
import Button from "./Button";
import SubmitButton from "./SubmitButton";
import { SubmitContactForm } from "../actions";
import { useState } from "react";
import toast from "react-hot-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TContactUsSchema } from "@/lib/type";
import { ContactUsSchema } from "@/lib/type";

const FormContact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm<TContactUsSchema>({
    resolver: zodResolver(ContactUsSchema),
  });

  const onSubmit = async (data: TContactUsSchema) => {
    const response = await SubmitContactForm(data);

    if (response.errors) {
      toast.error("Could not send message to the server");
    }

    if (response.success) {
      toast.success("your message was sent successfully");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <div className="flex flex-col gap-4 md:flex-row">
        <input
          {...register("name", {
            required: "name is required",
          })}
          placeholder="Your name"
          className="form-input flex-1"
        />
        {errors.name && (
          <span className="text-red-500">{`${errors.name.message}`}</span>
        )}

        <input
          {...register("subject", {
            required: "role is required",
          })}
          placeholder="Subject of Inquiry"
          className="form-input flex-1"
        />
        {errors.subject && (
          <span className="text-red-500">{`${errors.subject.message}`}</span>
        )}
      </div>

      <div className="my-4 flex flex-col gap-4 md:flex-row">
        <input
          {...register("email")}
          type="email"
          placeholder="Email"
          name="email"
          className="form-input flex-1"
        />
        {errors.email && (
          <span className="text-red-500">{`${errors.email.message}`}</span>
        )}

        <input
          {...register("phoneNumber")}
          type="number"
          name="phoneNumber"
          placeholder="Phone Number"
          className="form-input flex-1"
        />
        {errors.phoneNumber && (
          <span className="text-red-500">{`${errors.phoneNumber.message}`}</span>
        )}
      </div>
      <textarea
        {...register("message", {
          required: "message is required",
        })}
        name="message"
        placeholder="Your message"
        className="form-textarea w-full"
      ></textarea>
      {errors.message && (
        <span className="text-red-500">{`${errors.message.message}`}</span>
      )}

      <button
        disabled={isSubmitting}
        type="submit"
        className="block bg-blue-600 px-4 py-2 text-secondary transition hover:scale-105 hover:shadow-xl"
      >
        {isSubmitting ? "Submitting" : "Submit"}
      </button>
    </form>
  );
};

export default FormContact;
