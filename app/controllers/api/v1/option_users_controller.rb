module Api::V1
class OptionUsersController < AdminController
  protect_from_forgery
  respond_to :json   
  def index
    # Find root task_id for this task  if it is not root task   
    # Find all children task_id for 
    # Find all option_id for a user on this task   
    # save as {task_id:[option_id,...]}
    current_user||=User.find(2)      
    uid= params[:uid]
    tid= params[:tid]
    if uid && uid == 'me'
      uid=current_user.id
    end
    objs=OptionUser.get_options(tid,uid)
    respond_with objs   
  end 
  def create
    @obj={rc:0}
    new_option_ids=params[:option_user][:opts]
    current_user||=User.find(2)      
    user_id=current_user.id 
    OptionUser.set_options(new_option_ids,user_id) 
    #respond_with new_option_ids 
    render :json => {:options => new_option_ids}
  end  
  def show
    @obj=OptionUser.find(params[:id])
    respond_with @obj      
  end  
  private
    # Use callbacks to share common setup or constraints between actions.
    # Only allow a trusted parameter "white list" through.
    def get_params
      #params.require(:task_option).permit(:task_id, :name, :description, :vote, :user_id)
      params.require(:option_user).permit!
      #params.require(:opts).permit!
    end

    #def search_col
      #TaskOption.column_names[1]
    #end     
end
end