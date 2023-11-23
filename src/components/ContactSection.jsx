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
          Looking for nutrition information, employment details or want to
          contact us? Our team is happy to help you find answers.{" "}
        </p>
      </div>
      {/* FAQs section */}
      <FAQs />
      {/* feedback section */}
      <div>
        <p className="p-4 text-4xl font-main">Feedback</p>
        <p className="p-4 text-base font-paragraph">
          Whether you have questions, feedback or comments about something you
          love, we want to know. Tell us about your experience with the
          restaurant or the app, or reach out for customer support.
        </p>
      </div>
    </div>
  );
};

export default ContactSection;
