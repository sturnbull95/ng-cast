angular.module('video-player')

.component('videoPlayer', {
  templateUrl: "src/templates/videoPlayer.html",
  bindings:{
    video:"<",
    index:"<",
    url:"<"

  },
  controller: 'videoPlayerController'
}).controller('videoPlayerController', function(){
    this.iframes = function(id){
      return 'https://www.youtube.com/embed/' + id
    }
  }
)
