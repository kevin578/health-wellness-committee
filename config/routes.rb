Rails.application.routes.draw do
  devise_for :members
  get 'goals', to: 'goal#index'
  post 'update_goal', to: "goal#update_goal"
end
