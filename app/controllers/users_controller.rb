class UsersController < ApplicationController

  before_action :authenticate_user!

  def posts
    @posts = User.includes(:posts).find(current_user.id).posts
  end

  def edit
    
  end

  def show
    
  end

  def update
    
  end

  def destroy
    
  end

  
end
