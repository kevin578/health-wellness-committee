require 'CSV'
namespace :health_goals do
  task add_from_csv: :environment do
    # commented out code initiated database
    # data = CSV.read("/Users/kevinbriggs/Documents/code/health_wellness_comittee/lib/tasks/goals.csv", {headers: true, force_quotes: true})
    

    # data.each_with_index do |row, i|
    #   date = DateTime.parse(row.field('Date'), true)
    #   meeting = Meeting.create(date: date, family_id: 1)
    #   row.field('Kevin').split("\n").each do | goal |
    #     HealthGoal.create(goal: goal, member_id: 1, meeting_id: meeting.id)
    #   end
    #   row.field('Alissa').split("\n").each do | goal |
    #     HealthGoal.create(goal: goal, member_id: 2, meeting_id: meeting.id)
    #   end
    # end

  end

end
