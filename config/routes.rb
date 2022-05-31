Rails.application.routes.draw do
  devise_for :members
  root to: "member#profile"
  get 'meeting/:meeting_id/healthgoals', to: 'goal#index', as: 'meeting_healthgoals'
  get 'profile', to: 'member#profile'
  post 'update-goal', to: "goal#update_goal"
  post 'new-goal', to: "goal#new_goal"
  delete 'delete-goal', to: "goal#delete_goal"
  post 'meeting/create', to: 'meeting#create'
  resources :meeting, only: ['new']
end
