import { useState } from 'react';
import person from '../assets/person.jpg';

function Features() {
    const users = [
        {
            stud_name: "Numan ",
            feedback: "I love the t- shirts from X Y ZOME! The quality is amazing, and the designs are trendy.The customer service is excellent, making my shopping experience delightful."
        },
        {
            stud_name: "Hamza",
            feedback: "Zome is my go-to wholesaler for t-shirts. Competitive prices and top-notch quality keep my customers happy. The variety and prompt delivery are impressive."
        },
        {
            stud_name: "Tushar",
            feedback: "Organizing events is easier with X Y ZOME. Their customizable t-shirts, vibrant colors, and excellent quality impress our participants. The affordable pricing and timely delivery. "
        },
    ];

    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

    const handleNextTestimonial = () => {
        setCurrentTestimonialIndex((prevIndex) => (prevIndex === users.length - 1 ? 0 : prevIndex + 1));
    };

    const handlePrevTestimonial = () => {
        setCurrentTestimonialIndex((prevIndex) => (prevIndex === 0 ? users.length - 1 : prevIndex - 1));
    };

    return (
        <>
            <section className="text-text body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="text-center mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-text mb-4">What Our Customers Says</h1>
                        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Here are some feedback from our regular customers who's business also operate on the very large customer based.</p>
                        <div className="flex mt-6 justify-center">
                            <div className="w-16 h-1 rounded-full bg-black inline-flex" />
                        </div>
                    </div>
                    {window.innerWidth > 768 ? (
                        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                            {users.map((data, index) => (
                                <div key={index} className="p-4 md:w-1/3 text-center">
                                    <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                                        <img src={person} alt="Person Photo" className="w-full h-full object-cover rounded-full" />
                                    </div>

                                    <div className="flex-grow">
                                        <h2 className="text-gray-900 text-lg title-font font-medium mb-3">{data.stud_name}</h2>
                                        <p className="leading-relaxed text-base">{data.feedback}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="relative mx-auto max-w-2xl">
                            <div className="overflow-hidden">
                                <div className="flex space-x-4 transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentTestimonialIndex * 100}%)` }}>
                                    {users.map((data, index) => (
                                        <div key={index} className="w-full flex-shrink-0">
                                            <div className="p-4 text-center">
                                                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                                                    <img src={person} alt="Person Photo" className="w-full h-full object-cover rounded-full" />
                                                </div>

                                                <div className="flex-grow">
                                                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">{data.stud_name}</h2>
                                                    <p className="leading-relaxed text-base">{data.feedback}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <button className="absolute top-1/2 transform -translate-y-1/2 left-0 text-black  border-0 py-2 px-4 focus:outline-none bg-gray-50 rounded-full" onClick={handlePrevTestimonial}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 19l-7-7 7-7"
                                    />
                                </svg>

                            </button>
                            <button className="absolute top-1/2 transform -translate-y-1/2 right-0 text-black  border-0 py-2 px-4 focus:outline-none bg-gray-50 rounded-full" onClick={handleNextTestimonial}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>

                            </button>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}

export default Features;
