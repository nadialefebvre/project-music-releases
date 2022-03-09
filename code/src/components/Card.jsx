import React from 'react'

import Cover from './Cover'
import Title from './Title'
import Artists from './Artists'


const Card = (props) => {
  return (
    <div className="card">
        <Cover image={props.image} title={props.title} albumURL={props.albumURL} />
        <Title title={props.title} albumURL={props.albumURL} />
        <Artists artistID={props.artistID} name={props.name} artistsURL={props.artistsURL} />
    </div>
  )
}

export default Card
