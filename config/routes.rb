Rails.application.routes.draw do

  resources :welcomes
  get 'homepage_jap', to: 'welcomes#homepage_jap'
  root 'welcomes#homepage_eng'
end
