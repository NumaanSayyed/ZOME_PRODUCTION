import { useState } from 'react';

function FAQ() {
    const FAQ1 = [
        {
            question: " What sizes do we offer?",
            answer: "We offer sizes ranging from all size, from S to XL."
        },
        {
            question: "Do you have a physical store?",
            answer: "No, we operate exclusively online to keep our prices affordable and offer a wider selection for our customers."
        },
        {
            question: "Where are your T-shirts made?",
            answer: "Our T-shirts are ethically made in various locations around the India, ensuring high-quality and fair labor practices. "
        },
        {
            question: " Do you offer any discounts for bulk orders?",
            answer: "Yes, we offer discounts for bulk orders. Please contact us for more information. "
        },


    ];
    const FAQ2 = [

        {
            question: "How do I place an order?",
            answer: "Simply browse our collection, select the items you like, choose your size and color, and click, proceed to checkout."
        },
        {
            question: " Do you offer custom T-shirt designs?",
            answer: "Yes, we offer custom T-shirt printing. Please contact our customer service team for more details."
        },
        {
            question: "How can I contact customer service?",
            answer: "You can reach our customer service team via email at xyzome03@gmail..com or you can also WhatsApp us ."
        },
        {
            question: "How can I stay updated on your latest promotions?",
            answer: "Get logged in to our site for newsletter to receive updates on new arrivals, special offers, and exclusive discounts. ."
        },
    ];

    const [visibleFAQ, setVisibleFAQ] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setVisibleFAQ(visibleFAQ === index ? null : index);
    };

    return (
        <section className="bg-white">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-text">Frequently asked questions</h2>
                <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
                    <div>
                        {FAQ1.map((data, index) => (
                            <div className="mb-10" key={index}>
                                <h3
                                    className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-text cursor-pointer"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                    </svg>
                                    {data.question}
                                </h3>
                                {visibleFAQ === index && <p className="text-gray-500 dark:text-gray-400">{data.answer}</p>}
                            </div>
                        ))}
                    </div>
                    <div>
                        {FAQ2.map((data, index) => (
                            <div className="mb-10" key={index + FAQ1.length}>
                                <h3
                                    className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-text cursor-pointer"
                                    onClick={() => toggleFAQ(index + FAQ1.length)}
                                >
                                    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                    </svg>
                                    {data.question}
                                </h3>
                                {visibleFAQ === index + FAQ1.length && <p className="text-gray-500 dark:text-gray-400">{data.answer}</p>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FAQ;
