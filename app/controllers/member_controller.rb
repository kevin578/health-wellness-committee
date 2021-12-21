class MemberController < ApplicationController
  def register 
    render 'devise/registrations/new' 
  end
end
