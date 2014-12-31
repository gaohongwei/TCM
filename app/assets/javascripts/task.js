var app = angular.module('app',['services','checklist-model']);

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
  //,Tasks,TaskOptions,OptionUsers
  //app.controller('tasksController',function($scope,Tasks,TaskOptions,OptionUsers){
  app.controller('tasksController', ['$scope','Tasks','TaskOptions','OptionUsers',function($scope,Tasks,TaskOptions,OptionUsers){
 //app.controller('tasksController',[function($scope,services){    
 //app.controller('tasksController',['$scope','services',function($scope,services){
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
      console.log("refresh $scope.items");
      console.log($scope.items);           
    }    
    $scope.refresh_answers=function(){
      $scope.answers  =OptionUsers.query({uid:'me',tid:$scope.root_id}); 
      console.log($scope.answers);         
    }
    $scope.add_option = function(item) {   
      option=TaskOptions.create({task_id:item.id,name:item.new});      
      item.options.push(option);            
      item.add_more=false;               
    };     
   
    $scope.save_answers = function(item) {
      OptionUsers.create({option_user:{opts:$scope.answers}});
      $scope.refresh_answers();               
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
                    
  }]);
