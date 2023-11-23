import React from "react";
import FAQs from "./FAQs";

const ContactSection = () => {
  return (
    // whole page div
    <div className="min-h-screen bg-primary text-secondary">
      {/* header */}
      <div>
        <header className="p-4 text-4xl font-main">Contact us</header>
        <p className="p-4 text-lg font-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
      </div>
      {/* FAQs section */}
      <FAQs />
    </div>
  );
};

export default ContactSection;
