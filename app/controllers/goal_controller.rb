class GoalController < ApplicationController
  def index
    family = Family.find(current_member[:family_id])
    @current_meeting_id = params[:meeting_id]
    meeting = Meeting.find(@current_meeting_id)
    @health_goals = family.health_goals
    @family_members = family.members 
    @meetings = family.meetings.map do | meeting |
      { id: meeting.id, date: meeting.date, health_goals: meeting.health_goals }    
    end
    @meetings = @meetings.reverse
  end

  def update_goal
    goal = HealthGoal.find(params["goalId"])
    res = goal.update( goal: params["inputValue"], status: params["goalStatus"] )
    render json: res
  end
end
