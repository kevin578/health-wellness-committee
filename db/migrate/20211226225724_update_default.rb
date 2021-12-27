class UpdateDefault < ActiveRecord::Migration[5.2]
  def change
    change_column_default :health_goals, :goal_type, 0
    change_column_default :health_goals, :status, 0
  end
end
