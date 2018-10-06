angular.module('video-player',[])
.component('app', {
templateUrl: "src/templates/app.html",
controller:'appCtrl'
}).controller('appCtrl',function(){
  this.videos = exampleVideoData
  this.url = this.videos[0].id.videoId
  console.log(this.url)
  console.log(this.videos[0])
})
