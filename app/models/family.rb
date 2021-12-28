class Family < ApplicationRecord
  has_many :members
  has_many :meetings

  def health_goals
    self.meetings.order(date: :desc).map do | meeting |
      {
        date: meeting[:date],
        goals: meeting.health_goals
      }
    end

  end
end
