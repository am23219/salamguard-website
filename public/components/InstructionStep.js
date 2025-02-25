"use client";

import React, { useState } from "react";
import { FaClipboard } from "react-icons/fa";

function copyCode(button, setButtonText) {
  const codeBlock = button
    .closest(".code-container")
    .querySelector(".code-block").textContent;

  navigator.clipboard.writeText(codeBlock).then(
    function () {
      setButtonText("Copied!");
      button.classList.add("copied");

      setTimeout(() => {
        setButtonText("Copy");
        button.classList.remove("copied");
      }, 3000);
    },
    function (err) {
      console.error("Failed to copy: ", err);
    }
  );
}

export default function InstructionStep({ step, description, code, subSteps }) {
  const [buttonText, setButtonText] = useState("Copy");

  return (
    <div className="mb-8">
      <h4 className="text-lg font-semibold mb-2 text-[#1A3B61]">{step}</h4>
      <div className="mb-4 text-gray-600">{description}</div>
      {code && (
        <div
          className="code-container flex flex-col sm:flex-row items-start gap-4 p-4 rounded-lg shadow-lg"
          style={{
            backgroundColor: "#1e1e1e",
          }}
        >
          <div className="flex-shrink-0">
            <button
              className="copy-button px-4 py-3 rounded-lg shadow-md text-sm flex items-center gap-2 whitespace-nowrap mr-4"
              style={{
                backgroundColor: "#333",
                color: "white",
              }}
              onClick={(e) => copyCode(e.currentTarget, setButtonText)}
            >
              <FaClipboard className="copy-icon w-4 h-4" />
              {buttonText}
            </button>
          </div>
          <pre
            className="code-block p-3 rounded-md font-mono text-sm flex-grow mb-2"
            style={{
              backgroundColor: "#1e1e1e",
              color: "#ffffff",
              overflowY: "auto",
              maxHeight: "200px",
              whiteSpace: "pre",
              display: "flex",
              alignItems: "center",
              marginLeft: "10px",
            }}
          >
            {code}
          </pre>
        </div>
      )}

      {/* Render subSteps if they exist */}
      {subSteps && (
        <div className="sub-steps mt-4 space-y-4">
          {subSteps.map((subStep, index) => (
            <div key={index} className="sub-step mb-4">
              <h5 className="font-semibold">{subStep.subStep}</h5>
              <div className="text-gray-600 mb-2">{subStep.description}</div>
              {subStep.code && (
                <div
                  className="code-container flex flex-col sm:flex-row items-start gap-4 p-4 rounded-lg shadow-lg"
                  style={{
                    backgroundColor: "#1e1e1e",
                  }}
                >
                  <div className="flex-shrink-0">
                    <button
                      className="copy-button px-4 py-3 rounded-lg shadow-md text-sm flex items-center gap-2 whitespace-nowrap mr-4"
                      style={{
                        backgroundColor: "#333",
                        color: "white",
                      }}
                      onClick={(e) => copyCode(e.currentTarget, setButtonText)}
                    >
                      <FaClipboard className="copy-icon w-4 h-4" />
                      {buttonText}
                    </button>
                  </div>
                  <pre
                    className="code-block p-3 rounded-md font-mono text-sm flex-grow mb-2"
                    style={{
                      backgroundColor: "#1e1e1e",
                      color: "#ffffff",
                      overflowY: "auto",
                      maxHeight: "200px",
                      whiteSpace: "pre",
                      display: "flex",
                      alignItems: "center",
                      marginLeft: "10px",
                    }}
                  >
                    {subStep.code}
                  </pre>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
