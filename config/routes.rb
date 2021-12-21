Rails.application.routes.draw do
  devise_for :members
  root 'dashboard#index'
end
