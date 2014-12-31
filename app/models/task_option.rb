class TaskOption < ActiveRecord::Base
  #TaskOption.joins(:task)
  belongs_to :task
  has_many :users, :class_name=>'OptionUser',:foreign_key=>'option_id'

  scope :by_task,lambda {|id|
    where(task_id:id)  
  } 
  scope :by_user,lambda {|id|
    where(user_id:id)  
  }    
end