class DashboardController < ApplicationController
  def index
    family = Family.find(current_member[:family_id])
    @health_goals = family.health_goals
    @family_members = family.members 
  end
end
