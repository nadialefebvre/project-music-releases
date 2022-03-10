import React from "react"

import Card from "./Card"

const CardsBox = (props) => {
  return (
    <section className="cards-box">
      {props.data.map((album) => {
        let artistsNames = album.artists.map(artist => artist.name)
        let artistsURL = album.artists.map(artist => artist.external_urls.spotify)

        return (
          <Card
            key={album.id}
            image={album.images[1].url}
            title={album.name}
            albumURL={album.external_urls.spotify}
            artistsNames={artistsNames}
            artistsURL={artistsURL}
          />
        )
      })}
    </section>
  )
}

export default CardsBox
