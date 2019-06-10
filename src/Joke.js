import React from "react";

import { useFetch } from "./hooks";

function Joke() {
  const { setup, punchline } = useFetch(
    "https://official-joke-api.appspot.com/jokes/random",
    {}
  );

  // fetch("https://official-joke-api.appspot.com/jokes/random")
  // function Joke() {
  //   const [joke, setJoke] = useState({});

  //   // useEffect takes a callback function which fires after ever single render of the component
  //   // that is exactly why we cannot call setJoke from useEffect hook because that will cause infinite render loop
  //   // so instead of fetching we will be using jokes api locally
  //   useEffect(() => {
  //     fetch("https://official-joke-api.appspot.com/jokes/random")
  //       // fetch("http://localhost:3005/jokes/random")
  //       .then(response => response.json())
  //       .then(json => {
  //         console.log("joke json ", json);
  //         setJoke(json);
  //       });
  //   }, []);

  // // each API request contains a setup and punchline so lets destructure that
  // const { setup, punchline } = joke;

  return (
    <div>
      <h3>Joke</h3>
      <p>{setup}</p>
      <p>
        <em>{punchline}</em>
      </p>
    </div>
  );
}

export default Joke;
