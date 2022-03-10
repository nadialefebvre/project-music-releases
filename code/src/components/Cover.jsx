import React from "react"

const Cover = (props) => {
  return (
      <>
        <img
          className="image"
          src={props.image}
          alt={props.title} 
        />
        <div className="buttons-overlay">
          <img
            className="button other"
            src="./icons/heart.svg"
            alt="Heart button" 
          />
          <a
            href={props.albumURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="button play"
              src="./icons/play.svg"
              alt="Play button" 
            />
          </a>
          <img
            className="button other"
            src="./icons/dots.svg"
            alt="Dots button" 
          />
        </div>
      </>
  )
}

export default Cover
