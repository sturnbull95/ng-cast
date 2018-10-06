angular.module('video-player')
.component('search', {
  templateUrl: "src/templates/search.html",
  controller:'searchCtrl',
  bindings:{
    service:'<',
    youTube: '<',
    search:'<'
  }
})
.controller('searchCtrl', function(){
  this.query = ''
  this.handleClick = () => {
    this.search()
  }
})
