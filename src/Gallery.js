import React, { useState, useEffect } from "react";
import PICTURES from "./data/pictures";

const SECONDS = 1000;
const minimumDelay = 1 * SECONDS;
const minimumIncrement = 1;

function Gallery() {
  const [index, setIndex] = useState(0);
  const [delay, setDelay] = useState(3 * SECONDS);
  const [increment, setIncrement] = useState(1);

  // useEffect(() => {
  //   setInterval(() => {
  //     setIndex((index + 1) % PICTURES.length);
  //   }, 3000);
  // }, []);
  // value of index is always 0 in this case so the image changes only once after render.
  // React provides an alternative way to handle this by passing in a callback function to the setIndex function.

  useEffect(() => {
    console.log("delay ", delay, "increment ", increment);

    const interval = setInterval(() => {
      setIndex(storedIndex => {
        return (storedIndex + increment) % PICTURES.length;
      });
    }, delay);

    return () => {
      clearInterval(interval);
    };
  }, [delay, increment]);

  const updateDelay = event => {
    const delay = Number(event.target.value) * SECONDS;
    setDelay(delay < minimumDelay ? minimumDelay : delay);
  };

  const updateIncrement = event => {
    const increment = Number(event.target.value);
    setIncrement(increment < minimumIncrement ? minimumIncrement : increment);
  };

  return (
    <div className="Gallery">
      <img src={PICTURES[index].image} alt="Gallery Images" />
      <div className="multiform">
        <div>
          Gallery Transition Delay (seconds):{" "}
          <input type="number" onChange={updateDelay} />
        </div>
        <div>
          Gallery Increment: <input type="number" onChange={updateIncrement} />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
