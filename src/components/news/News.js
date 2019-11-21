import React from "react";

const News = ({ news }) => {
  const { urlToImage, url, title, description, source } = news;

  return (
    <div className="col s12 m6 l4">
      <div className="card">
        {urlToImage ? (
          <div className="card-image">
            <img src={urlToImage} alt={title} />
            <span className="card-title">{source.name}</span>
          </div>
        ) : null}

        <div className="card-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="card-action">
          <a
            href={url}
            target="__blank"
            rel="noopener noreferrer"
            className="waves-effect waves-ligth btn"
          >
            Watch News
          </a>
        </div>
      </div>
    </div>
  );
};

export default News;
