angular.module('video-player')
.service('youTube', function($http){
  // TODO
  // this.search = function(){
  //   console.log('fuck this')
  // }
  this.search = function(){
    var config = {
      method:'GET',
      url:'https://www.googleapis.com/youtube/v3/search',
      params:{
        q:'corgis',
        part:'snippet',
        key:'AIzaSyBEM-BaLvLtlZvXPBYocdbKsg6_qDDsRtg',
        videoEmbeddable:true,
        maxResults:5,
        type:'video'
      }
    }
    return $http(config).then(function(response) {
      console.log('success')
      console.log(response.data.items)
      return response.data.items
    },function(response){
      console.log('fail')
      console.log(response)
    })



    // return $http({
    //   method:'GET',
    //   q: 'corgis',
    //   part: 'snippet',
    //   url: 'https://www.youtube.googleapis.com/v3/search',
    //   key: 'AIzaSyDfyOrucEk7hEC017JMXw9gNClmaRUMAys',
    //   videoEmbeddable: true,
    //   maxResults: 5
    // }).then(function(response){
    //   console.log(response)
    //   return response.data
    // }).catch(function(){
    //   console.log('error')
    // })
  }
});
