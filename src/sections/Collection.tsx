import sd from '../assets/sd.png'
import YelloT from '../assets/YellowT.png'
import c1 from '../assets/c1.jpeg'
import c2 from '../assets/c2.jpeg'
import combo from '../assets/combo.jpeg'
import HangT from '../assets/HangT.jpg'
function Collection() {
  return (
  <>
  
          <div className="container px-5 mx-auto">
              <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                  <h1 className="sm:text-3xl text-2xl font-medium title-font mt-4 text-gray-900 ">OUR COLLECTION</h1>
              </div>
          </div>









          
          <div className="container mx-auto  cursor-pointer px-5 lg:px-32 ">
              <div className="-m-1 flex flex-wrap md:-m-2 ">
                  <div className="flex w-1/2 flex-wrap">
                      <div className="w-1/2 p-1 md:p-2  hover:scale-105">
                          <img
                              alt="gallery"
                              className="block h-full w-full rounded-lg object-cover object-center"
                              src={c1} />
                      </div>
                      <div className="w-1/2 p-1 md:p-2  hover:scale-105">
                          <img
                              alt="gallery"
                              className="block h-full w-full rounded-lg object-cover object-center"
                              src={c2} />
                      </div>
                      <div className="w-full p-1 md:p-2  hover:scale-105">
                          <img
                              alt="gallery"
                              className="block h-full w-full rounded-lg object-cover object-center"
                              src={sd} />
                      </div>
                  </div>
                  <div className="flex w-1/2 flex-wrap">
                      <div className="w-full p-1 md:p-2  hover:scale-105">
                          <img
                              alt="gallery"
                              className="block h-full w-full rounded-lg object-cover object-center"
                              src={YelloT}/>
                      </div>
                      <div className="w-1/2 p-1 md:p-2  hover:scale-105" >
                          <img
                              alt="gallery"
                              className="block h-full w-full rounded-lg object-cover object-center"
                              src={HangT} />
                      </div>
                      <div className="w-1/2 p-1 md:p-2  hover:scale-105">
                          <img
                              alt="gallery"
                              className="block h-full w-full rounded-lg object-cover object-center"
                              src={combo} />
                      </div>
                  </div>
              </div>
          </div>
  </>
  )
}

export default Collection;
