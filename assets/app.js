import MediaPlayer from './MediaPlayer.js'

const video = document.querySelector('video')
const buttonPlay = document.getElementById('play')
const buttonMute = document.getElementById('mute')

const player = new MediaPlayer({ video })
buttonPlay.onclick = () => player.tooglePlayPause()
buttonMute.onclick = () => player.toogleMuteUnmute()
