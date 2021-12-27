class UpdateHealthGoals < ActiveRecord::Migration[5.2]
  def change
    rename_column :health_goals, :type, :goal_type
    change_column :health_goals, :status, :integer
  end
end
