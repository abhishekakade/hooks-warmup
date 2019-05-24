import React, { useState } from "react";

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
    </div>
  );
}

export default App;
