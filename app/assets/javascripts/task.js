var app = angular.module('app',['services','checklist-model']);
app.config([
  "$httpProvider", function($httpProvider) {
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
  }
]);
  app.directive("option", function () {
    return {
      restrict: 'E',
      scope: {
        name: "@"
      },
      template: '<div>{{name}}</div>'
    };
  }); 
  app.directive("rbutton", function () {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        //show:"@",
        display: "@",
        callf: "&"
      },
      template: '<a class="btn btn-danger"  ng-show="show" ng-click="callf({item:item})">{{display}}</a>',
      link: function(scope){
          scope.show = scope.item.showDelete;//true;
      }      
    };
  }); 
app.controller('tasksController',function($scope,Tasks,TaskOptions,OptionUsers){
 //app.controller('tasksController',function($scope,services){
    $scope.initialize = function( root_id,user_id ) {
      $scope.root_id = root_id;
      $scope.user_id = user_id;      
      $scope.refresh();
      console.log("refresh");
    } 
    $scope.refresh=function(){
      $scope.refresh_items(); 
      $scope.refresh_answers();            
    }  
    $scope.refresh_items=function(){
     $scope.items  =Tasks.query({id:$scope.root_id}); 
    }    
    $scope.refresh_answers=function(){
      $scope.answers  =OptionUsers.query({uid:'me',tid:$scope.root_id}); 
      console.log($scope.answers);         
    }
    $scope.save_answers = function(item) {
      OptionUsers.create({option_user:{opts:$scope.answers}});
      $scope.refresh_answers();              
      console.log("save_answer");
      console.log("$scope.answers");
      console.log($scope.answers);   
    };
    $scope.add = function(item) {
      path="/tasks/new?pid="+item.id
      window.location=path;
      //$location.path(path) 
    };  
    $scope.save = function(item) {
      console.log("clicked save");
      console.log(item.new);   
      item.add_more=false;       
      //$location.path(path) 
      console.log($scope.answers);        
    };    
    $scope.add_option = function(item) {   
      TaskOptions.create({task_id:item.id,name:item.new});  
      $scope.refresh();
      console.log($scope.items);
      item.add_more=false;       
      //$location.path(path) 
    };                     
  });
