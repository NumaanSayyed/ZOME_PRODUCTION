const stats=[
    {
        value: "Support 24/7"
    },
    {
        value: "Quality"
    },
    {
        value: "Variety"
    },
    {
        value: "Affordable Price"
    },
    {
        value: "Reliable Delivery"
    },
    {
        value: "Customer Satisfaction"
    },
 
]
function Static() {
  return (
    <>
          <div className="container my-24 mx-auto md:px-6">
              <section className="mb-32 text-center md:text-left">
                  <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
                      <div className="flex flex-wrap items-center">
                          <div className="block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
                              <img src="https://i.postimg.cc/zDCyYFf5/organic-flat-feedback-concept-illustrated-23-2148951369.jpg" alt="Trendy Pants and Shoes" className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
                          </div>
                          <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
                              <div className="px-6 py-12 md:px-12">
                                  <h2 className="mb-6 pb-2 text-3xl font-bold">
                                      Trendy Collection
                                  </h2>
                                  <p className="mb-6 pb-2 text-neutral-500 dark:text-neutral-300">
                                      Our satisfied services we provide to our customers,place your order by directly call us through call to action button.
                                  </p>
                                  <div className="mb-6 flex flex-wrap">
                                      {stats.map((data)=>
                                          <div className="mb-4 w-full md:w-4/12">
                                              <p className="flex">
                                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="mr-3 h-5 w-5 text-neutral-900 dark:text-neutral-80">
                                                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>{data.value}
                                              </p>
                                          </div>
                                    )}
                                     
                                  </div>
                                  <a href="tel:8657655887"
                                      className="text-black bg-gradient-to-r from-white to-white hover:from-black hover:to-black border hover:border-black hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 shadow-lg shadow-black/50 dark:shadow-lg dark:shadow-gray-800-800/80 cursor-pointer font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
                                  >
                                      Call To Action
                                  </a>


                              </div>
                          </div>
                      </div>
                  </div>
              </section>
          </div>
    </>
  )
}

export default Static
