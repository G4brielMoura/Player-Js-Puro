
// criative object JS
const player = {
  title: document.querySelector(".card-content h5"),
  artist: document.querySelector(".artist"),
  cover: document.querySelector(".card-image"),
  audio: document.querySelector("audio"),
  audioData: audios,
  currentAudio: {},
  start() {
    player.currentAudio = player.audioData[0];
    player.cover.style.background = `url('${path(player.currentAudio.cover)}') no-repeat center center / cover`
    player.title.innerText = player.currentAudio.title
    player.artist.innerText = player.currentAudio.artist
    player.audio.src = path(player.currentAudio.file);
    player.audio.addEventListener("ended",() => {
      
    } )
  },
}
// end Object