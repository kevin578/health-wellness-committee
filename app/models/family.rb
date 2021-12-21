class Family < ApplicationRecord
  has_many :members
  has_many :meetings
end
