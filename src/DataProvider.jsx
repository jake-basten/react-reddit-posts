import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RedditPost from './RedditPost';

const DataProvider = ({subReddit}) => {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const url = `https://www.reddit.com/r/${subReddit}.json`;
    axios.get(url)
      .then((response) => {
        const { data } = response;
        setPostData(data.data.children);
      })
      .catch((error) => {
        setPostData([]);
        console.log(error);
      });
  }, [subReddit]);

  if (!postData) {
    return null;
  }

  return (
    <>
      {
        postData.map((post, i) => {
          const { title, thumbnail } = post.data;
          if (thumbnail.includes('.jpg')) {
            return <RedditPost
              key={i}
              title={title}
              imageSrc={thumbnail}
            />
          }
        })
      }
    </>
  );
}

export default DataProvider;