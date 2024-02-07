import React from "react";
import { createClient } from "@/prismicio";
import TestimonialCard from "./TestimonialCard";

const TestimonialIndexSection = async () => {
  const client = createClient();
  const testimonials = await client.getAllByType("testimonials");
  //   const result = await (async () => {
  //     return new Promise((resolve) =>
  //       setTimeout(() => resolve("Promise resolved after 3 seconds"), 5000),
  //     );
  //   })();

  return (
    <div className="big-container">
      <div className="grid grid-cols-1  gap-4 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <TestimonialCard
            key={index}
            image={item.data.person_image}
            classname=""
            name={item.data.name}
            position={item.data.person_designation}
            review={item.data.review_text}
            upworkProfileLink={item.data.upwork_profile_link}
            linkedInProfileLink={item.data.linkedin_profile_link}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialIndexSection;
