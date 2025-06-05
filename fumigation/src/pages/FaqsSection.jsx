import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What pests do you treat?",
    answer:
      "We handle a wide range of pests, including ants, beetles, gnats, mosquitos, silverfish, termites, bats, cluster flies, ladybugs, moths, spiders, ticks, bed bugs, fleas, mice, rats, stink bugs, wasps, bees, flies, millipedes, centipedes, roaches, and stored grain pests."
  },
  {
    question: "Do you offer free pest inspections?",
    answer: "Yes, we offer free pest inspections."
  },
  {
    question: "Are your pest control methods safe for children and pets?",
    answer: "Absolutely. We use eco-friendly and safe methods designed to protect your family and pets."
  },
  {
    question: "How quickly can you provide a service?",
    answer: "We aim to provide services as quickly as possible, often within 24-48 hours."
  },
  {
    question: "Do you provide emergency pest control?",
    answer: "Yes, we offer emergency pest control services. Contact us immediately if urgent."
  }
];

export default function FaqsSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-center text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
      <p className="text-center text-gray-600 mb-8">
        Have a Question? Do not hesitate to reach out.
      </p>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <button
              className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-gray-800 hover:bg-gray-100 focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              {openIndex === index ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </button>
            {openIndex === index && (
              <div className="px-4 py-3 text-gray-700 bg-gray-50 border-t">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
