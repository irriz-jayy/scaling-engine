import React from "react";

const Contact = () => {
  return (
    <div className="h-screen bg-secondary">
      <header className="p-2 text-4xl text-center font-main text-primary">
        <span className="underline">Contact</span> us
        <p className="text-lg text-center text-primary font-paragraph">
          Feel free to reach out to us for any concern
        </p>
      </header>
      <div className="border h-3/4">
        <div className="w-full border h-1/4"></div>
      </div>
    </div>
  );
};

export default Contact;
