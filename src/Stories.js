import React from "react";

import { useFetch } from "./hooks";

function Stories() {
  const stories = useFetch(
    "https://news-proxy-server.appspot.com/topstories",
    []
  );

  // useEffect(() => {
  //   fetch("https://news-proxy-server.appspot.com/topstories")
  //     .then(response => response.json())
  //     .then(json => setStories(json));
  // }, []);

  return (
    <div className='Stories'>
      <h3>Top Stories</h3>
      {stories.map(story => {
        const { id, by, time, title, url } = story;
        return (
          <div key={id}>
            <a href={url}>{title}</a>
            <div>
              {/* time * 1000 because its in milliseconds and gives year 1970 otherwise */}
              {by} - {new Date(time * 1000).toLocaleString()}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Stories;
