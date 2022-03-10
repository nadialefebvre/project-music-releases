import React from "react"

const Title = (props) => {
  return (
      <a 
        href={props.albumURL} 
        target="_blank" 
        rel="noopener noreferrer"
      >
        {props.title}
      </a>
  )
}

export default Title
