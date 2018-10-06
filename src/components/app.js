angular.module('video-player')
.component('app', {
templateUrl: "src/templates/app.html",
controller:'appCtrl',

}).controller('appCtrl',function(youTube){
  
  this.videos = exampleVideoData
  this.play = exampleVideoData.slice(1)
  this.search = () => {
    console.log(youTube.search())
    console.log('search')
  }
  this.handleClick = (video,index) => {
    console.log('hi')
    var temp = this.videos[0]
    this.videos[0] = video;
    this.videos[index] = temp;
    console.log(this.videos)
  }
})
