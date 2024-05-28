import sd from '../assets/sd.png'
function Carousel() {
  return (
    <>
         <section className="bg-white ">
  <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
    <div className="mr-auto place-self-center lg:col-span-7">
      <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-2xl xl:text-4xl ">ZOME, YOUR STYLE AVAILABLE HERE</h1>
      <p className="max-w-2xl mb-6 font-light  lg:mb-8 md:text-lg lg:text-xl ">We are dealers of trendy tshirts, our business operate in both modes Wholesale & Retail</p>

      {/* <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center bg-gradient-to-t from-blue-300 to-blue-900 border border-gray-300 rounded-lg focus:ring-4   ">
        Speak to Sales
      </a> */}
            <div className="mt-6 lg:mb-0 mb-6">

              <a href="https://www.facebook.com/xyzome03?mibextid=ZbWKwL">
                <button className="bg-white text-blue-400 rounded-full shadow-lg font-normal h-10 w-10 items-center justify-center align-center outline-none focus:outline-none mr-2 hover:scale-105 " type="button">
                  <i className="fab fa-facebook-square"></i></button></a>

              <a href="https://instagram.com/x_y_zome_03">
                <button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 hover:scale-105" type="button">
                  <i className="fab fa-instagram"></i></button></a>

              {/* <a href="https://youtube.com/@X_Y_ZOME">
                <button className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                  <i className="fab fa-youtube"></i></button> </a> */}
            </div>
    </div>
    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
      <img src={sd} alt="numan sd" />
    </div>
  </div>
</section>

    
    </>
  )
}

export default Carousel
