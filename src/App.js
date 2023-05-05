import "./App.css";
import React, { useState } from "react";
import cabbage from "./assets/image1.jpeg";
import mango from "./assets/image2.jpeg";
import fig from "./assets/image3.jpeg";
import gaze from "./assets/image4.jpeg";
import peach from "./assets/image5.jpeg";
import avocado from "./assets/image6.jpeg";

const images = [cabbage, mango, fig, gaze, peach, avocado];

//functional component - this is just a small component, so we will not export
const Loading = ({ calculatedWidth }) => (
  <aside>
    <div className="loading-bar">
      <label htmlFor="images-loaded">Loading all your favorite images..</label>
      <progress id="images-loaded" max="100" value={calculatedWidth}></progress>
    </div>
  </aside>
);

const App = () => {
  //retunerer et par - en current state value og em function til at opdatere den value
  //vores intital value er 0 fra vores array, men tænk over hvilket type værdi du forventer
  const [currentImage, setCurrentImage] = useState(0);

  const [numLoaded, setNumLoaded] = useState(0);

  //når vi klikker på billedet:
  // So the, if condition we're gonna write if currentImage is less than the images length
  //then we're going to do something here.
  // write images.length. 1 so when wereach the last next position this condition evaluates to false and it will hit our else statement.
  //without this minus one this condition is always going to be true and we'll never hit our else statement.
  const handleClick = () => {
    const length = images.length - 1;

    setCurrentImage((currentImage) => {
      return currentImage < length ? currentImage + 1 : 0;
      // if (currentImage < length) {
      //   return currentImage + 1;
      // } else {
      //   return 0;
      // }
    });
  };

  const handleImageLoad = () => {
    setNumLoaded((numLoaded) => numLoaded + 1);
  };

  return (
    <section>
      <header>
        <h1>Zesty</h1>
        <div />
        <h2>
          A photography project <br /> by Ella Fielding
        </h2>
      </header>

      <figure>
        {numLoaded < images.length && <Loading calculatedWidth={(numLoaded / images.length) * 100} />}
        {/* {numLoaded > images.length ? <Loading calculatedWidth={(numLoaded / images.length) * 100} /> : null} */}

        <figcaption>
          {currentImage + 1} / {images.length}
        </figcaption>

        {images.map((imageURL, index) => (
          <img src={imageURL} alt="" key={imageURL} onClick={handleClick} onLoad={handleImageLoad} className={currentImage === index ? "display" : "hide"} />
        ))}
      </figure>
    </section>
  );
};
/* når man laver et array, hvilket vi gør når vi mapper, skal elementerene have deres egen key, fx ID */
/* if loaded is less than length of image array then display loading component otherwise null 
        Both statements must be true in order to evaluate the rest of statement*/
export default App;
