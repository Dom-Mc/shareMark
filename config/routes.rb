Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'application#index'

  resources :bookmarks, only: [:index, :create, :show]
  post 'bookmarks/:id', to: 'bookmarks#update'
  get 'bookmarks/tags/:name', to: 'bookmarks#filter'
  get 'tags', to: 'tags#index'
end
