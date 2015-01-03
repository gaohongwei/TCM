var services = angular.module('services',['ngResource']);
var app = angular.module('app',['services','checklist-model']);
//http://draptik.github.io/blog/2013/07/28/restful-crud-with-angularjs/
services.config(["$httpProvider", function($httpProvider) {
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
  }]);
services.factory('Tasks', ['$resource',function ($resource) {
  return $resource('/api/v1/tasks/', {}, 
  {
      query: {  method: 'GET', 
                params: {id: '@id'},
                isArray: true },
      create: { method: 'POST' }
  })
}]);
services.factory('Task', ['$resource',function ($resource) {
  return $resource('/tasks/:id', {}, {
      show: { method: 'GET' },
      update: { method: 'PUT', params: {id: '@id'} },
      delete: { method: 'DELETE', params: {id: '@id'} }
  });
}]);
services.factory('TaskOption', ['$resource',function ($resource) {
  return $resource('/api/v1/task_options/:id', {}, 
  {
      show: { method: 'GET' },
      update: { method: 'PUT', params: {id: '@id'} },
      delete: { method: 'DELETE', params: {id: '@id'} }
  });
}]);
services.factory('TaskOptions', ['$resource',function ($resource) {
  return $resource('/api/v1/task_options', {},
  {
      query: {  method: 'GET', 
                params: {tid: '@tid',opr:'@count'},
                isArray: true },
      create: { method: 'POST' }
  })
}]);
services.factory('OptionUsers', ['$resource',function ($resource) {
  return $resource('/api/v1/option_users', {},
  {
      query: {  method: 'GET', 
                params: {uid: '@uid',tid:'@tid'},
                isArray: true },
      create: { method: 'POST' },  
  });
}]);