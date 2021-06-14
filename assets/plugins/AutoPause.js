export default class AutoPause {
  constructor(video){
    this.player = video
  }

  run(){
    const observer = new IntersectionObserver(this.handleIntersection.bind(this), {threshold: 0.2})
    observer.observe(this.player)
  }

  handleIntersection(entries){
    const entry = entries[0]

    if(entry.intersectionRatio > 0.2){
      this.player.play()
    }else{
      this.player.pause()
    }
  }
}
