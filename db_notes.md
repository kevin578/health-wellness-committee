Family
  has-many :members
  has-many :health-goals
  has-many :members
  name

Members
  belongs-to Family
  has-many health-goals

Meeting
 - belongs to family
 - has-many health goals
 - members
 -  

HealthGoals
  - date
  - goal
  - status
  - member-id
