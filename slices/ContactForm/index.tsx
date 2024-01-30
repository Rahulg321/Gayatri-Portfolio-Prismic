import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import FormContact from "@/app/components/FormContact";

/**
 * Props for `ContactForm`.
 */
export type ContactFormProps = SliceComponentProps<Content.ContactFormSlice>;

/**
 * Component for "ContactForm" Slices.
 */
const ContactForm = ({ slice }: ContactFormProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-slate-50"
    >
      <div className="big-container py-12">
        <div className="text-center">
          <span className="block bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-4xl font-bold text-transparent">
            {slice.primary.formheading}
          </span>
        </div>
        <div className="text-center text-base">
          <span>{slice.primary.form_description}</span>
        </div>
        <FormContact />
      </div>
    </section>
  );
};

export default ContactForm;
