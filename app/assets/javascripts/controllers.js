var controllers = angular.module('controllers',['services']); 
//Read more at http://www.airpair.com/angularjs/posts/top-10-mistakes-angularjs-developers-make#lOTRk8qyrJxtBzox.99

//controllers.controller('MyCtrl', function($scope, MyService){ //controller code });  

//controllers.controller('tasksController',function($scope,Tasks,TaskOptions,OptionUsers){

  controllers.controller('tasksController',function($scope,services){
    $scope.initialize = function( root_id,user_id ) {
      $scope.root_id = root_id;
      $scope.user_id = user_id;      
      $scope.refresh();
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