const player = {
  title: document.querySelector(".card-content h5"),
  artist: document.querySelector(".artist"),
  cover: document.querySelector(".card-image"),
  audio: document.querySelector("audio"),
  data: {
    title: "SEX MACHINE",
    artist: "James Brown",
    cover: "files/1.png",
    file: "files/Sexmachine.mp3",
  },
  start() {
    player.cover.style.background = `url('${player.data.cover}') no-repeat center center / cover`
    player.title.innerText = player.data.title
    player.artist.innerText = player.data.artist
    player.audio.src = player.data.file
  },
}
