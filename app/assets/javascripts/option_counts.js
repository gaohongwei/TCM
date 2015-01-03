var app = angular.module('app');
  //,Tasks,TaskOptions,OptionUsers
  //app.controller('tasksController',function($scope,Tasks,TaskOptions,OptionUsers){
  app.controller('option_countsController', ['$scope','Tasks','TaskOptions','OptionUsers',function($scope,Tasks,TaskOptions,OptionUsers){
 //app.controller('tasksController',[function($scope,services){    
 //app.controller('tasksController',['$scope','services',function($scope,services){
    $scope.initialize = function( root_id,user_id ) {
      $scope.root_id = root_id;
      $scope.user_id = user_id;      
      $scope.refresh();
      console.log("refresh");
      $scope.show_vote=true;
    } 
    $scope.refresh=function(){
      $scope.refresh_items(); 
      $scope.refresh_answers(); 
      $scope.refresh_options();           
    }  
    $scope.refresh_items=function(){
     $scope.items  =Tasks.query({id:$scope.root_id}); 
      console.log("refresh $scope.items");
      console.log($scope.items);           
    }   
    $scope.refresh_options=function(){
     $scope.options  =TaskOptions.query({tid:$scope.root_id}); 
      console.log("refresh $scope.options");
      console.log($scope.options);  
      console.log("refresh $scope.options");               
    }  
    $scope.refresh_votes=function(){
     $scope.counts  =TaskOptions.query({tid:$scope.root_id,opr:'count'}); 
      console.log("refresh $scope.counts");
      console.log($scope.options);  
      console.log("refresh $scope.counts");               
    }        
    $scope.refresh_answers=function(){
      $scope.answers  =OptionUsers.query({uid:'me',tid:$scope.root_id}); 
      console.log("$scope.answers");        
      console.log($scope.answers);         
    }
    $scope.add_option = function(item) {   
      option=TaskOptions.create({task_id:item.id,name:item.new});
      //item.options.push(option); 
      //$scope.options[0][item.id]<< {task_id:item.id,name:option.name,id:option.id};                             
      item.add_more=false; 
      $scope.refresh_options();              
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
