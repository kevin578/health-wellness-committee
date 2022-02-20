Rails.application.routes.draw do
  devise_for :members
  get 'meeting/:meeting_id/healthgoals', to: 'goal#index'
  post 'update_goal', to: "goal#update_goal"
  post 'meeting/create', to: 'meeting#create'
  resources :meeting, only: ['new']
end
