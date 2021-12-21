class AddIds < ActiveRecord::Migration[5.2]
  def change
    change_table :members do |t|
      t.integer :family_id
    end
    change_table :meetings do |t|
      t.integer :family_id
    end
    change_table :health_goals do |t|
      t.integer :member_id
      t.integer :meeting_id
    end
  end
end
