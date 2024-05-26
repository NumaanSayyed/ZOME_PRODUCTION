import { useState } from 'react';

function FAQ() {
    const FAQ1 = [
        {
            question: "Do we offer any discount ",
            answer: "It's a credit which you get for each project you do by the service provider under which you doing that program,Initially you get -1000 points and as you contribute something for the enviornment it moves towards positive"
        },
        {
            question: "How do I track the impact of my contributions?",
            answer: "You will get the carbon cre"
        },
        {
            question: "What are the benefits of carbon compensation?",
            answer: "First of all you save the earth, and for the student who enrolled for the program will also get completion certificate of internship "
        },


    ];
    const FAQ2 = [

        {
            question: "Do I receive a certificate for my contributions?",
            answer: "Yes, participants often receive certificates acknowledging that they have done contributed/perform activity which impacts to the enviornment."
        },
        {
            question: "Can businesses also participate in carbon compensation?",
            answer: "Our participant's are not only limited just with students, each person has responsibility to save the enviornment."
        },
        {
            question: "What happens if I fails to deliver the promised offset?",
            answer: "In such case you won't get the certificate "
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
