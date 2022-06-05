class CreateCredits < ActiveRecord::Migration[7.0]
  def change
    create_table :credits do |t|
      t.integer :member_id
      t.integer :task_id
      t.integer :receiving_member_id
      t.timestamps
    end
  end
end
