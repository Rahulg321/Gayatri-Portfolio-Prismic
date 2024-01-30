import React from "react";
import Button from "./Button";
import SubmitButton from "./SubmitButton";

const FormContact = () => {
  return (
    <div className="mt-4 bg-background p-4">
      <form action="" className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="flex flex-col">
          <label htmlFor="">Your name</label>
          <input type="text" placeholder="Your name" className="form-input" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Current Position</label>
          <input type="text" placeholder="Your role" className="form-input" />
        </div>
        <div className="col-span-2 flex flex-col">
          <label htmlFor="">Email Address</label>
          <input type="email" placeholder="Email" className="form-input " />
        </div>

        <span className="col-span-2">Type of Inquiry</span>
        <label>
          <input
            type="radio"
            name="radioGroup"
            value="option1"
            className="form-radio"
          />
          Business
        </label>

        <label>
          <input
            type="radio"
            name="radioGroup"
            value="option2"
            className="form-radio"
          />
          Personal
        </label>

        <label>
          <input
            type="radio"
            name="radioGroup"
            value="option3"
            className="form-radio"
          />
          Finance
        </label>

        <label>
          <input
            type="radio"
            name="radioGroup"
            value="option4"
            className="form-radio"
          />
          Marital
        </label>
        <div className="col-span-2 flex flex-col">
          <label htmlFor="">Write your message</label>
          <textarea
            name="message"
            placeholder="Your message"
            className="form-textarea"
          ></textarea>
        </div>
        <SubmitButton
          label={"Submit"}
          showIcon={false}
          className="mt-4 cursor-pointer"
        />
      </form>
    </div>
  );
};

export default FormContact;
