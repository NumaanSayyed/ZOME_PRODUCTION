const review = [
    {
        name: "hamza",
        desc: "I got this tees aldkjfa;slfdkj",
        img: "https://i.postimg.cc/GtgP6srZ/Screenshot-2023-05-02-204001.png"
    },
    {
        name: "numan",
        desc: "I am thoroughly impressed with this website! The quality of the Men's T-shirts exceeded my expectations – each piece reflects true craftsmanship. The dedication to providing top-notch service is evident from start to finish.",
        img: "https://i.postimg.cc/GtgP6srZ/Screenshot-2023-05-02-204001.png"
    },
];
function Review() {
  return (
   <>
          <section className="text-gray-600 body-font">
              <div className="container px-5 pt-20 mx-auto">
                  <div className="text-center mb-20">
                      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">OUR SATISFIED CUSTOMER </h1>
                      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Elevate Your Wardrobe with Our Exclusive Collection of Trendy Men's T-shirts. Unleash Your Unique Style, Boost Your Confidence..</p>
                      <div className="flex mt-6 justify-center">
                          <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex" />
                      </div>
                  </div>
                  <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                      {review.map((data) =>
                          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                                  <img src={data.img} className="rounded-full" alt="" />
                              </div>
                              <div className="flex-grow">
                                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">{data.name}</h2>
                                  <p className="leading-relaxed text-base">{data.desc} </p>

                              </div>
                          </div>
                      )}
                  </div>


              </div>
          </section>
   </>
  )
}

export default Review
