class AddKeyToTables < ActiveRecord::Migration[5.2]
  def change
    change_column :members, :id, :int, null: false, unique: true, auto_increment: true,  primary_key: true
    change_column :families, :id, :int, null: false, unique: true, auto_increment: true,  primary_key: true
    change_column :meetings, :id, :int, null: false, unique: true, auto_increment: true,  primary_key: true
    change_column :health_goals, :id, :int, null: false, unique: true, auto_increment: true,  primary_key: true
    change_column :health_goals, :id, :int, null: false, unique: true, auto_increment: true,  primary_key: true
  end
end
