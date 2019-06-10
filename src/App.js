import React, { useState } from "react";
import Joke from "./Joke";
import Stories from "./Stories";

// useEffect - used to apply side effect to the react components. Like setting interval or fetching data, etc

// You can use arrow function for App but you won't be able to use this keyword
// function declaration is more preferred in React documentation so its better to go with that
function App() {
  // we will be adding a search bar to this project
  // we will need to use state to get user search query
  // useState() hook itself takes an argument which is the value for the initial state
  // in this case it will be an empty string
  const [userQuery, setUserQuery] = useState("");

  // onChange has event so we can use event in the callback function
  const updateUserQuery = event => {
    console.log("userQuery", userQuery);
    setUserQuery(event.target.value);
  };

  const handleKeyPress = event => {
    if (event.key === "Enter") {
      searchQuery();
    }
  };

  const searchQuery = () => {
    window.open(`https://www.google.com/search?q=${userQuery}`, "_blank");
  };

  return (
    <div className='App'>
      <h1>Hello, Abhishek!</h1>
      <div className='form'>
        <input
          value={userQuery}
          onChange={updateUserQuery}
          onKeyPress={handleKeyPress}
        />
        <button onClick={searchQuery}>Search</button>
      </div>
      <hr />
      <Joke />
      <hr />
      <Stories />
    </div>
  );
}

export default App;
