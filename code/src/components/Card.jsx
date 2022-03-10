import React from "react"

import Cover from "./Cover"
import Title from "./Title"
import Artists from "./Artists"

const Card = (props) => {
  return (
    <div className="card">
      <div className="image-box">
        <Cover
          image={props.image}
          title={props.title}
          albumURL={props.albumURL}
        />
      </div>
      <p className="card-title">
        <Title title={props.title} albumURL={props.albumURL} />
      </p>
      <p className="card-artists">
        <Artists
          artistsNames={props.artistsNames}
          artistsURL={props.artistsURL}
        />
      </p>
    </div>
  )
}

export default Card
