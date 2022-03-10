import React from "react"

import data from "./data.json"

import Header from "./components/Header"
import CardsBox from "./components/CardsBox"
import Footer from "./components/Footer"

const App = () => {
  const albumsType = data.albums.items.filter(album => album.album_type === "album")
  const singlesType = data.albums.items.filter(album => album.album_type === "single")

  return (
    <section>
      <Header type={"New albums"} />
      <CardsBox data={albumsType} />
      <Header type={"New singles"} />
      <CardsBox data={singlesType} />
      <Footer />
    </section>
  )
}

export default App
