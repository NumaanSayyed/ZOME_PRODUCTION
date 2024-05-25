import { useState, useRef } from "react";
function Contact() {

    const formRef = useRef<HTMLFormElement | null>(null); 
    const scriptUrl = "https://script.google.com/macros/s/AKfycbxREg7r6Ept74MS0y8ESvZqOv7go8TEGLXr8JY15TTnvYlzXlc2VzBSIM2KMHKjgsmZ4A/exec";
    const [loading, setLoading] = useState(false);
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setLoading(true);

        if (formRef.current) {
            fetch(scriptUrl, {
                method: 'POST',
                body: new FormData(formRef.current),
            }).then(_res => {
                alert("SUCCESSFULLY SUBMITTED");
                location.reload()
                setLoading(false);
            }).catch(err => console.log(err));
        }
    };

    return (
        <>


            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                    {/* <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1884.8560503537453!2d72.83809498857542!3d19.12028197976516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9da700c5f7b%3A0xe583865993f1d1e1!2sSagar%20City%2C%20Andheri%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1691297783036!5m2!1sen!2sin" style={{ "border": "0" }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>                    </div> */}
                    <div className="absolute inset-0 bg-gray-300">
                        <iframe width="100%" height="100%" frameBorder="0"  title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1884.8560503537453!2d72.83809498857542!3d19.12028197976516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9da700c5f7b%3A0xe583865993f1d1e1!2sSagar%20City%2C%20Andheri%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1691297783036!5m2!1sen!2sin" style={{ "border": "0" }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact</h2>
                        <p className="leading-relaxed mb-5 text-gray-600">
                            Fill the form below and click the submit button. It will navigate you directly to our WhatsApp, where you can send your messages.
                        </p>
                        <form method="POST" ref={formRef} name="google-sheet" className="relative mb-4">
                         
                            <div className="relative mb-4">
                                <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="Name"/>
                            </div>
                            <div className="relative mb-4">
                                <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="Email" />
                            </div>
                            <div className="relative mb-4">
                                <input type="number" id="mobil" name="mobile" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="Mobile" />
                            </div>
                         
                            <div className="relative mb-4">
                                <input type="submit" onClick={handleSubmit} value={loading ? "Sending..." : "Submit"} className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700 cursor-pointer" />                        </div>

                        </form>

                    </div>
                </div>
            </section>


        </>
    );
}

export default Contact;
