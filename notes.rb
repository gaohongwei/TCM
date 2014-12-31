
3180 Crow Canyon Pl, San Ramon, CA 94583


Easy question creation

Build your own or use expert templates.


Send surveys to anyone
Use the web, email, or social media.


Smart reporting
Gain insights with powerful analytics.

https://www.surveymonkey.com/survey-thanks/?sm=v4bixFDnXmNUCZujM%2fl%2beMwPayEQ%2fjD4xpHO39gBSJI%3d

  app.factory('tasksInitializer', function(){
    return <%= @obj.to_json.html_safe %>;
  });
   
  app.factory('tasksInitializer', function(){
    return <%= @obj.to_json.html_safe %>;
  });
  
symbols=[:name,:id]
 for sym in symbols do
   puts sym
  end

def  get_nested(item,attributes) 
  me={}
  for att in attributes do
   me[att]=item[att]
  end

  if item.children.size > 0
    kids||=[]
    item.children.each do |c|
      kids<<get_nested(c)
    end
    me[:kids]=kids 
  end

  me
end

t=Task.first
get_nested(t,[:name,:id])


def  get_kids(item) 
  kids||=[]
  if item.children
    item.children.each do |c|
      a={}
      a[:name]=c.name
      kkids=get_kids(c)
      a[:kids]=kkids if  kkids    
      kids<<a
    end
  end
  kids
end

t=Task.first
get_kids(t)


def get_parent(item)
  tree=[]
  puts "item="+item.name
  if item.parent
    tree<<item.parent.name
    tree<<get_parent(item.parent)
  else
    return []
  end
end

t=Task.last
get_parent(t).flatten
2.1.3 :003 > TaskType.model_name.param_key
 => "task_type" 
2.1.3 :004 > "TaskType".underscore
 => "task_type" 
 
<table class="table table-striped table-bordered table-condensed">

./current/app/assets/javascripts/admin/controllers/widget_controller.coffee:      
<li id="widget-{{ child.$$.r.id }}" compile='nested_widget_template', ng-repeat='relation in child.progenies'></li>
./current/app/views/admin/partials/dashboard/nav-widgets.html.haml:    
%li{ id: "widget-{{ progeny.$$.r.id }}", compile: 'nested_widget_template', ng_repeat: 'relation in Widget.$$.root.progenies' }
./current/app/views/admin/partials/dashboard/nav-widgets.html.haml:    
%li{ id: "widget-{{ progeny.$$.r.id }}", compile: 'nested_widget_template', ng_repeat: 'relation in Widget.$$.root.progenies' }
./current/app/views/admin/partials/dashboard/test.html.haml:    
%li{ id: "widget-{{ child.$$.r.id }}", compile: 'nested_widget_template', ng:{ repeat: 'relation in Widget.$$.root.progenies' }}