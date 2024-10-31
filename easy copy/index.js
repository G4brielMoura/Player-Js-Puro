const title = document.querySelector(".card-content h5")
const artist = document.querySelector(".artist")
const cover = document.querySelector(".card-image")
const audio = document.querySelector("audio")

const data = {
  title: "SEX MACHINE",
  artist: "James Brown",
  cover: "files/1.png",
  file: "files/Sexmachine.mp3"
}
cover.style.background = `url('${data.cover}') no-repeat center center / cover`
title.innerText = data.title
artist.innerText = data.artist
audio.src = data.file