
// criative object JS
window.player = {
  title: document.querySelector(".card-content h5"),
  artist: document.querySelector(".artist"),
  cover: document.querySelector(".card-image"),
  audio: document.querySelector("audio"),
  audioData: audios,
  currentAudio: {},
  currentPlaying: 0,

start() {
  this.update();
  this.audio.onended = () => this.next()   
  },

next() {
this.currentPlaying++;
this.update();
this.audio.play();
},
update() {
this.currentAudio = this.audioData[this.currentPlaying];

    this.cover.style.background = `url('${path(this.currentAudio.cover)}') no-repeat center center / cover`;
    this.title.innerText = this.currentAudio.title;
    this.artist.innerText = this.currentAudio.artist;
    this.audio.src = path(this.currentAudio.file);
    
}
};



// end Object