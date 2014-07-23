Rails.application.routes.draw do

  root "home#index"
  resources :todo_items, except: [:new]

end
