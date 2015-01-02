class TaskOption < ActiveRecord::Base
  #TaskOption.joins(:task)
  #attr_accessor :users_count  
  belongs_to :task
  belongs_to :user  
  has_many :users, :class_name=>'OptionUser',:foreign_key=>'option_id'

  scope :by_task,lambda {|id|
    where(task_id:id)  
  } 
  scope :by_user,lambda {|id|
    where(user_id:id)  
  }  
  def self.user_vote
    select("task_options.id, count(option_users.id) AS vote").
    joins("LEFT JOIN option_users ON option_users.option_id = task_options.id").
    group("task_options.id").
    order("vote desc")
  end        
end