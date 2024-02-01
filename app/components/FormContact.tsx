"use client";

import React from "react";
import Button from "./Button";
import SubmitButton from "./SubmitButton";
import { SubmitContactForm } from "../actions";
import { useState } from "react";
import toast from "react-hot-toast";

const FormContact = () => {
  const formSubmitHandler = () => {};

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        toast.success("successfully send message");
      }}
      className=""
    >
      <div className="flex flex-col gap-4 md:flex-row">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          className="form-input flex-1"
        />

        <input
          type="text"
          name="role"
          placeholder="Your role"
          className="form-input flex-1"
        />
      </div>

      <div className="my-4 flex flex-col gap-4 md:flex-row">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="form-input flex-1"
        />

        <input
          type="number"
          name="phoneNumber"
          placeholder="Phone Number"
          className="form-input flex-1"
        />
      </div>
      <textarea
        name="message"
        placeholder="Your message"
        className="form-textarea w-full"
      ></textarea>

      <button
        type="submit"
        className="bg-blue-600 px-4 py-2 text-secondary transition hover:scale-105 hover:shadow-xl"
      >
        Submit
      </button>
    </form>
  );
};

export default FormContact;
