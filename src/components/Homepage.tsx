import FAQ from "../sections/FAQ";
import Review from "../sections/Review";
import Services from "../sections/Services";
import Static from "../sections/Static";
import Collection from "../sections/Collection";
import Carousel from "../sections/Hero";
export function Homepage() {
 
 

  return (
    <>
    


      <Carousel /> 
      <Collection /> 

     <Static/>

     <Services/>

      <Review/>

      <FAQ/>
     
    
    </>

  );
}

export default Homepage;
