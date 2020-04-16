Rails.application.routes.draw do

  devise_for :users
  get 'home/index'
  root 'home#index'

  concern :favoritable do |option|
    shallow do
      post '/favorite', {to: 'favorite#create', on: :member}.merge(option)
      delete '/favorite', {to: 'favorite#destroy', on: :member}.merge(option)
    end
  end

  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :dashboard, only: :index
      resources :categories, only: [:index, :show]
      resources :search, only: :index
      resources :albums, only: :show do
        resources :recently_heards, only: :create
      end
      resources :favorites, only: :index

      resources :songs, only: [] do
        concerns :favoritable, favoritable_type: 'song'
      end
    end
  end

end
