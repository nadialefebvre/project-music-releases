import React from 'react'

const Artists = (props) => {

  return (
      props.artistsURL.map((item, index) => {
        return (
          <a 
            className="artist" 
            href={item} key={props.artistsNames[index]} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            {props.artistsNames[index]}
          </a>
        )
      })
  )
}

export default Artists
