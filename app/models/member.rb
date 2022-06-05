class Member < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_many :health_goals
  has_many :credits
  belongs_to :family

  def credits_for_member(member_id)
    credits.where(receiving_member_id: member_id).length
  end
end
