require 'CSV'
namespace :health_goals do
  task add_from_csv: :environment do
    data = CSV.read("/Users/kevinbriggs/Documents/code/health_wellness_comittee/lib/tasks/goals.tsv", {headers: true, :col_sep => "\t"})
    kevin_goals = []
    alissa_goals = []
    data.each_with_index do |row, i|
      puts row.field('Date')
      kevin_goals[i] = {date: row.field('Date'), goals: row.field('Kevin') }
      alissa_goals[i] = {date: row.field('Date'), goals: row.field('Alissa') }
    end

    puts kevin_goals[2]
  end

end
