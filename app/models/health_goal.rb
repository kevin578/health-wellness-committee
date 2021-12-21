class HealthGoal < ApplicationRecord
  belongs_to :member
  has_one :meeting
end
