module Api::V1
class TaskOptionsController < AdminController
  protect_from_forgery
  respond_to :json    
  def index
    id= params[:tid]
    if id 
      @objs=TaskOption.by_task(tid)
    else
      @objs=TaskOption.all
    end
    respond_with @objs
  end 
  def create
    @obj=TaskOption.new(params[:task_option])
    fill_user_id()      
    if @obj.save
      respond_with @obj
    else
      render :json => {error:'error'}
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    # Only allow a trusted parameter "white list" through.
    def get_params
      #params.require(:task_option).permit(:task_id, :name, :description, :vote, :user_id)
      params.require(:task_option).permit!

    end

    #def search_col
      #TaskOption.column_names[1]
    #end     
end
end