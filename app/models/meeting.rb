class Meeting < ApplicationRecord
  belongs_to :family
  has_many :health_goals
end
