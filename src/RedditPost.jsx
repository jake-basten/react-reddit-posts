import React from 'react';

const RedditPost = ({ title, imageSrc }) => {
  return (
    <>
      <p>{title}</p>
      <img
        src={imageSrc}
        alt={title}
        width={250}
        height={250}
      />
    </>
  );
}

export default RedditPost;