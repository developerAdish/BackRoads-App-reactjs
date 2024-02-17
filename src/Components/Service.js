import React from 'react'

const Service = ({data}) => {
  return (
    <article className="service">
      <span className="service-icon">
        <i className={data.icon}></i>
      </span>
      <div className="service-info">
        <h4 className="service-title">{data.title}</h4>
        <p className="service-text">{data.text}</p>
      </div>
    </article>
  );
}

export default Service