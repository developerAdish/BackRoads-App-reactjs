import React from 'react'

const SocialLinks = ({link, iconClass}) => {
  return (
    <li >
      <a href={link.href} target="_blank" rel="noreferrer" className={iconClass}>
        <i className={link.icon}></i>
      </a>
    </li>
  );
}

export default SocialLinks