Rails.application.routes.draw do


  resources :site, :path => '/' do
    member do
      post :upvote
    end
  end

  get "site/most_popular"


end
