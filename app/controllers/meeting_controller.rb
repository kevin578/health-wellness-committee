class MeetingController < ApplicationController
  def new

  end

  def create
    meeting = Meeting.create(family_id: current_member.family.id, date: Time.now )
    redirect_to "/meeting/#{meeting.id}/healthgoals"
  end


end
