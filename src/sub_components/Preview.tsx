import { useLocation, Link } from 'react-router-dom';
import { useEffect } from 'react';

function bottomToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
}

function Preview() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const location = useLocation();
  const { from } = location.state;
  console.log(from);

  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img

              alt="ecommerce"
              className="w-full lg:w-1/3 lg:h-auto h-96 sm:h-64 object-cover object-center rounded cursor-pointer hover:scale-110"
              src={from.imageUrl}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">{from.brand}</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">Elevate Your Style</h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  {[...Array(4)].map((_, i) => (
                    <svg key={i} fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
              </div>
              <p className="leading-relaxed">{from.desc.name}</p>
              <p className="leading-relaxed">Fabric: {from.desc.fabric}</p>
              <p className="leading-relaxed">Sleeve: {from.desc.sleeve_length}</p>
              <p className="leading-relaxed">Net Quantity: {from.desc.net_quantity}</p>
              <p className="leading-relaxed">Size: {from.desc.size.join(', ')}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
              <div className="flex flex-col sm:flex-row items-center sm:items-start">
                <span className="line-through text-red-500 text-lg">&#x20B9; 5000</span>

                <span className="title-font font-medium text-2xl text-gray-900">&#x20B9; {from.price}</span>
                <div className="flex mt-4 sm:mt-0 sm:ml-auto space-x-4">
                  <Link
                    to="/order"
                    state={{ from: from }}
                    className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded"
                    onClick={bottomToTop}
                  >
                    Order
                  </Link>
                  <button
                    className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded"
                    onClick={() => alert('Added to Cart')}
                  >
                    Add to Cart
                  </button>
                </div>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 mt-4 sm:mt-0 ml-4 hover:bg-gray-300">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5 hover:text-red-600" viewBox="0 0 24 24">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {/* Additional content can be added here */}
          </div>
        </div>
      </div>


      
    </>
  );
}

export default Preview;
