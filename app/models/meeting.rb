class Meeting < ApplicationRecord
  belongs_to :family
  has_many :health_goals

  def filtered_health_goals 
    family.members.map do |member|
      {member_name: member.name, health_goals: health_goals.filter {|health_goal| health_goal.member_id = member.id} }
    end
  end
end
