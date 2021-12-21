class ChangeMeetingName < ActiveRecord::Migration[5.2]
  def change
    rename_table :meeting, :meetings
  end
end
