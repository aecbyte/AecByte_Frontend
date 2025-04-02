"use client";
import { useState } from "react";
import PlusIcon from "./PlusIcon";

const FaqItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const itemId = `faq-item-${index}`;
  const answerId = `faq-answer-${index}`;

  return (
    <article className="bg-white shadow-[-2px_-2px_2px_rgba(0,0,0,0.25),2px_2px_2px_rgba(0,0,0,0.25)]">
      <button
        className="flex justify-between items-center w-full px-4 py-5 h-14 max-sm:px-3 max-sm:py-4 max-sm:h-[54px] text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={answerId}
        id={itemId}
      >
        <h3 className="text-xl font-medium text-black max-sm:text-xs">
          {index + 1}. {question}
        </h3>
        <span className="flex items-center justify-center">
          <PlusIcon isOpen={isOpen} />
        </span>
      </button>
      {isOpen && (
        <div
          id={answerId}
          role="region"
          aria-labelledby={itemId}
          className="px-4 py-3 text-base text-gray-700 max-sm:text-xs"
        >
          {answer}
        </div>
      )}
    </article>
  );
};

export default FaqItem;
