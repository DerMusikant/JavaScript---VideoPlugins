class MediaPlayer {
  constructor(config) {
    this.media = config.video
    this.plugins = config.plugins || []
    this._initPlugins()
  }
  _initPlugins() {
    this.plugins.forEach(plugin => {
      plugin.run()
    })
  }
  toggleMuteUnmute() {
    this.media.muted = !this.media.muted
  }
  togglePlayPause() {
    this.media.paused
      ? this.media.play()
      : this.media.pause()
  }
}

export default MediaPlayer
