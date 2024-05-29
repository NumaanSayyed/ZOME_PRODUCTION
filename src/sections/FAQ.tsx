import { useState } from 'react';

function FAQ() {
    const FAQs = [
        {
            category: "General Questions",
            items: [
                {
                    question: "Do we offer any discount?",
                    answer: "It's a credit system where you earn points for environmental contributions, starting with an initial -1000 points and moving towards positive as you contribute."
                },
                {
                    question: "How do I track the impact of my contributions?",
                    answer: "You will get updates through our platform which tracks and reports your carbon credits."
                },
                {
                    question: "What are the benefits of carbon compensation?",
                    answer: "Beyond saving the planet, participants also receive a completion certificate of internship for their engagement."
                },
            ]
        },
        {
            category: "Certification and Participation",
            items: [
                {
                    question: "Do I receive a certificate for my contributions?",
                    answer: "Yes, participants receive certificates acknowledging their environmental impact."
                },
                {
                    question: "Can businesses also participate in carbon compensation?",
                    answer: "Yes, our programs are open to both individuals and businesses committed to environmental responsibility."
                },
                {
                    question: "What happens if I fail to deliver the promised offset?",
                    answer: "Failure to meet your commitments may result in not receiving a certificate and potential removal from the program."
                },
            ]
        }
    ];

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="bg-white p-4 lg:p-8">
            <div className="max-w-screen-xl mx-auto">
                <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8">Frequently Asked Questions</h2>
                <div className="flex flex-wrap -mx-2">
                    {FAQs.map((section, sectionIndex) => (
                        <div key={sectionIndex} className="w-full md:w-1/2 px-2">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">{section.category}</h3>
                            {section.items.map((item, itemIndex) => (
                                <div key={itemIndex} className="mb-5">
                                    <button
                                        onClick={() => toggleFAQ(sectionIndex * 100 + itemIndex)}
                                        className="flex justify-between items-center w-full text-left text-gray-900 dark:text-gray-200 py-2 px-3 border rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                                    >
                                        <span>{item.question}</span>
                                        <svg className="w-6 h-6 transform transition-transform" style={{ transform: `rotate(${activeIndex === sectionIndex * 100 + itemIndex ? '180deg' : '0deg'})` }}>
                                            <path fillRule="evenodd" d="M5 10a1 1 0 01.293-.707l5-5a1 1 0 111.414 1.414L7.414 10l4.293 4.293a1 1 0 11-1.414 1.414l-5-5A1 1 0 015 10z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                    {activeIndex === sectionIndex * 100 + itemIndex && (
                                        <p className="mt-2 text-gray-600 dark:text-gray-400 px-3 py-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                            {item.answer}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FAQ;
