import React from 'react'

const Artists = (props) => {

  let artist = []
  for (let i = 0; i < props.artistsURL.length; i++) {
    let separator = ''
    if (props.artistsURL.length > 1 && i < props.artistsURL.length - 1) {
      separator = i === props.artistsURL.length - 2 ? ' & ' : ', '
    }

    artist.push(<a href={props.artistsURL[i]}>{props.name[i]}</a>)
    artist.push(<span>{separator}</span>)
  }

  return (
    <p className="card-artists">
      {artist}
    </p>
  )
}

export default Artists
