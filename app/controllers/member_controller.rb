class MemberController < ApplicationController
  def register 
    render 'devise/registrations/new' 
  end

  def profile
    @current_member = current_member
    @current_family = @current_member.family
    @last_meeting = @current_family.meetings.sort_by(&:date).last  
  end
end
