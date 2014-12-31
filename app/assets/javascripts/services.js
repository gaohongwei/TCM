var services = angular.module('services',['ngResource']);

//http://draptik.github.io/blog/2013/07/28/restful-crud-with-angularjs/
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
                params: {tid: '@tid'},
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