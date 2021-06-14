import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'
import AutoPause from './plugins/AutoPause.js'

const video = document.querySelector('video')
const buttonPlay = document.getElementById('play')
const buttonMute = document.getElementById('mute')

const player = new MediaPlayer({ video: video, plugins: [new AutoPlay(video), new AutoPause(video)] })
buttonPlay.onclick = () => player.togglePlayPause()
buttonMute.onclick = () => player.toggleMuteUnmute()
