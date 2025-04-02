"use client";
import FaqItem from "./FaqItem"; 

function FaqContainer({ faqData }) {
  
  return (
    <section className="relative px-5 pb-10 mx-auto my-0 w-full font-['JURA'] max-w-[800px]">
      <div className="flex flex-col gap-5 mx-auto my-0 max-w-[1043px] max-md:px-5 max-md:py-0">
        {faqData.map((faq, index) => (
          <FaqItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

export default FaqContainer;
