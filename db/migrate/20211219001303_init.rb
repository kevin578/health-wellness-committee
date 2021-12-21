class Init < ActiveRecord::Migration[5.2]
  def change
    create_table :families do |t|
      t.string :name
    end
    create_table :members do |t|
      t.string :name
    end
    create_table :meeting do |t|
      t.string :members
      t.datetime :date
      t.timestamps
    end
    create_table :health_goals do |t|
      t.text :goal
      t.string :status
      t.integer :type
      t.timestamps
    end
  end
end
