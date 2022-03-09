import React from 'react'

const Title = (props) => {
  return (
    <p className="card-title">
      <a href={props.albumURL}>{props.title}</a>
    </p>
  )
}

export default Title
