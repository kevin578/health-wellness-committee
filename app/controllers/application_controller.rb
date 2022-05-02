class ApplicationController < ActionController::Base
  before_action :require_login

private

  def require_login
    unless current_member || request.path == "/members/sign_in"
      redirect_to "/members/sign_in"
    end
  end
end
