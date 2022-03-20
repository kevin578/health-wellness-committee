Rails.application.routes.draw do
  devise_for :members
  get 'meeting/:meeting_id/healthgoals', to: 'goal#index'
  post 'update-goal', to: "goal#update_goal"
  post 'new-goal', to: "goal#new_goal"
  post 'meeting/create', to: 'meeting#create'
  resources :meeting, only: ['new']
end
