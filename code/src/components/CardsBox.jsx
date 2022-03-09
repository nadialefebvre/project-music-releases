import React from "react";

import Card from "components/Card";

const CardsBox = (props) => {
  return (
    <section className="cards-box">
      {props.data.map((album) => {
        let artistID = album.artists.map((artist) => artist.id) // not working, needs some fixing
        let artistsNames = album.artists.map((artist) => artist.name)
        let artistsURL = album.artists.map((artist) => artist.external_urls.spotify)

        return (
          <Card
            key={album.id}
            artistID={artistID} // not working needs to be fixed
            image={album.images[1].url}
            title={album.name}
            name={artistsNames}
            artistsURL={artistsURL}
            albumURL={album.external_urls.spotify}
          />
        );
      })}
    </section>
  );
};

export default CardsBox;
