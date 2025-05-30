// components/DialogflowMessenger.js
"use client"; // Required for client-side rendering in Next.js App Router

import { useEffect } from "react";
// declarations.d.ts

const DialogflowMessenger = () => {
  useEffect(() => {
    // Load the Dialogflow Messenger script dynamically
    const script = document.createElement("script");
    script.src = "https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      {/* Add the Dialogflow Messenger stylesheet */}
      <link
        rel="stylesheet"
        href="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css"
      />
      {/* Dialogflow Messenger web component */}
      {/* <df-messenger
        project-id="flawless-augury-448410-b4"
        agent-id="f9cf408b-0ec9-421f-b8ad-d3243b71c893"
        language-code="en"
        max-query-length="-1"
      >
        <df-messenger-chat-bubble chat-title="coullaxChat"></df-messenger-chat-bubble>
      </df-messenger> */}
      {/* Inline styles for customization */}
      <style jsx>{`
        df-messenger {
          z-index: 999;
          position: fixed;
          --df-messenger-font-color: #000;
          --df-messenger-font-family: Google Sans;
          --df-messenger-chat-background: #f3f6fc;
          --df-messenger-message-user-background: #d3e3fd;
          --df-messenger-message-bot-background: #fff;
          bottom: 16px;
          right: 16px;
        }
      `}</style>
    </>
  );
};

export default DialogflowMessenger;